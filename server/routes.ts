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
        title: "King Abdulaziz International Airport (KAIA)",
        description: "Expansion of the international terminal involving complex geometric structures and high-traffic infrastructure coordination. Specialist BIM support for large-scale aviation development.",
        imageUrl: "/assets/images/portfolio-kaia-new.jpg",
        category: "Infrastructure",
        scope: "Shop Drawings & IFC Package",
        location: "Jeddah, Saudi Arabia",
        completionDate: "2024"
      },
      {
        title: "Confidential Residential Development",
        description: "Large-scale residential development in Dubai. Specialist BIM delivery for initial design stages.",
        imageUrl: "/assets/images/confidential-dubai.png",
        category: "Residential",
        scope: "SD & DD Authority Submission",
        location: "Dubai, UAE",
        completionDate: "2024"
      },
      {
        title: "Confidential Development",
        description: "Large-scale residential and non-residential development in Saudi Arabia. Specialist BIM delivery for initial design stages.",
        imageUrl: "/assets/images/confidential-saudi.png",
        category: "Mixed-Use",
        scope: "SD & DD Authority Submission",
        location: "Saudi Arabia",
        completionDate: "2024"
      },
      {
        title: "Shura Island",
        description: "Luxury resort development featuring organic architectural forms. Comprehensive BIM support for as-built documentation and IFC packages.",
        imageUrl: "/assets/images/shura-island.jpeg",
        category: "Hospitality",
        scope: "As-Built Drawings & IFC Package",
        location: "Red Sea, Saudi Arabia",
        completionDate: "2024"
      }
    ];

    for (const seed of seeds) {
      await storage.createProject(seed);
    }
    console.log("Seeded database with sample projects");
  }
}
