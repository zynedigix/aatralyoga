import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Server-side validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Aatral Yoga <noreply@aatralyoga.com>",
      to: ["contact@aatralyoga.com"],
      replyTo: email,
      subject: `New Yoga Enquiry from ${name}`,
      html: `
        <h2>New Yoga Enquiry</h2>

        <table cellpadding="8" cellspacing="0" border="0">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${message || "-"}</td>
          </tr>
        </table>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to send email",
      });
    }

    console.log("Email sent successfully:", data);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}