export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    console.log("New message:", body);

    // TEMP response (so frontend doesn't break)
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
