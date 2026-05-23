import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, subject, message } = req.body;

      await resend.emails.send({
        from: "NAV Website <onboarding@resend.dev>",
        to: ["info@navbim.com"], // <-- your email here
        subject: subject || "New Contact Form Submission",
        html: `
          <h2>New Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.status(200).json({ success: true });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Email failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
