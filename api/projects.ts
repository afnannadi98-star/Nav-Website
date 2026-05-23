export default function handler(req, res) {
  res.status(200).json([
    {
      title: "SHURA ISLAND",
      category: "HOSPITALITY",
      image: "/attached_assets/IMG_0980_1771458086554.jpeg"
    },
    {
      title: "KING ABDULAZIZ INTERNATIONAL AIRPORT (KAIA)",
      category: "INFRASTRUCTURE",
      image: "/attached_assets/Jeddah_New_Terminal_1_10_1771488413740.jpg"
    },
    {
      title: "CONFIDENTIAL DEVELOPMENT",
      category: "MIXED-USE",
      image: "/attached_assets/CONFEDENTIAL_copy_1772811066762.jpg"
    },
    {
      title: "CONFIDENTIAL RESIDENTIAL DEVELOPMENT",
      category: "RESIDENTIAL",
      image: "/attached_assets/CONFEDENTIAL_copy_1772811066762.jpg"
    }
  ]);
}
