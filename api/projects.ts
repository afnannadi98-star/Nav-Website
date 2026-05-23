export default function handler(req, res) {
  res.status(200).json([
    {
      id: 12,
      title: "Shura Island",
      description: "Luxury resort development featuring organic architectural forms. Comprehensive BIM support for as-built documentation and IFC packages.",
      imageUrl: "/assets/images/shura-island.jpeg",
      category: "Hospitality",
      scope: "As-Built Drawings & IFC Package",
      location: "Red Sea, Saudi Arabia",
      completionDate: "2024"
    },
    {
      id: 8,
      title: "King Abdulaziz International Airport (KAIA)",
      description: "Expansion of the international terminal involving complex geometric structures and high-traffic infrastructure coordination. Specialist BIM support for large-scale aviation development.",
      imageUrl: "/assets/images/portfolio-kaia-new.jpg",
      category: "Infrastructure",
      scope: "Shop Drawings & IFC Package",
      location: "Jeddah, Saudi Arabia",
      completionDate: "2024"
    },
    {
      id: 13,
      title: "Confidential Development",
      description: "Large-scale residential and non-residential development in Saudi Arabia. Specialist BIM delivery for initial design stages.",
      imageUrl: "/attached_assets/NAV_logo.png",
      category: "Mixed-Use",
      scope: "SD & DD Authority Submission",
      location: "Saudi Arabia",
      completionDate: "2024"
    },
    {
      id: 14,
      title: "Confidential Residential Development",
      description: "Large-scale residential development in Dubai. Specialist BIM delivery for initial design stages.",
      imageUrl: "/attached_assets/NAV_logo.png",
      category: "Residential",
      scope: "SD & DD Authority Submission",
      location: "Dubai, UAE",
      completionDate: "2024"
    }
  ]);
}
``
