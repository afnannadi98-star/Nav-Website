await resend.emails.send({
  from: "NAV Website <onboarding@resend.dev>",
  to: ["afnan.nadi98@gmail.com"],
  subject: subject || "New Contact Form Submission",
  html: `
    <h2>New Inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});
