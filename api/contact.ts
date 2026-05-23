import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, subject, message } = req.body;

    console.log("Incoming form:", { name, email, subject, message });

    // ✅ send email
    const result = await resend.emails.send({
      from: "NAV BIM <info@navbim.com>",
      to: ["info@navbim.com"],
      reply_to: email,
      subject: subject || "New Contact Form Submission",
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email result:", result);

    return res.status(200).json({
      success: true,
      result,
    });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return res.status(500).json({
      success: false,
      error: error?.message || String(error),
    });
  }
}
