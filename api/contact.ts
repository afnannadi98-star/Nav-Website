import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, subject, message } = req.body;

      await resend.emails.send({
        from: "Test <onboarding@resend.dev>",
        to: ["afnan.nadi98@gmail.com"], // MUST be your resend email ✅
        subject: subject || "New Contact Form Submission",
        html: `
          <h2>New Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      // ✅ CRITICAL
      res.status(200).json({ success: true });

    } catch (error) {
      console.error("RESEND ERROR:", error);

      res.status(500).json({
        error: "Email failed",
        details: error?.message || error
      });
    }

  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
``
