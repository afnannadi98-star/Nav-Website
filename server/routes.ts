import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // === Inquiries ===
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === Projects ===
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProject(Number(req.params.id));
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  });

  // Seed data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    const seeds = [
      {
        title: "Skyline Tower",
        description: "Full BIM coordination for a 45-story mixed-use skyscraper, including structural and MEP integration.",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        category: "Commercial",
        location: "New York, NY",
        completionDate: "2024"
      },
      {
        title: "City General Hospital",
        description: "LOD 400 modeling for complex healthcare facility with intricate HVAC and medical gas systems.",
        imageUrl: "https://images.unsplash.com/photo-1581094794329-cd1361ddee21?auto=format&fit=crop&q=80",
        category: "Healthcare",
        location: "Chicago, IL",
        completionDate: "2023"
      },
      {
        title: "Metro Station Upgrade",
        description: "Scan-to-BIM services for renovating historical transit infrastructure.",
        imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
        category: "Infrastructure",
        location: "London, UK",
        completionDate: "2025"
      },
      {
        title: "Eco-Residential Complex",
        description: "Sustainable design coordination and energy analysis integration.",
        imageUrl: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80",
        category: "Residential",
        location: "Austin, TX",
        completionDate: "2024"
      }
    ];

    for (const seed of seeds) {
      await storage.createProject(seed);
    }
    console.log("Seeded database with sample projects");
  }
}
