let messages = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const msg = req.body;

    messages.push(msg);

    res.status(200).json({ success: true });
  }
}
