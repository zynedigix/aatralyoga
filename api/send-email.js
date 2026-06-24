import { Resend } from "resend";

const resend = new Resend(
    process.env.RESEND_API_KEY || "re_M1azTgyW_4417EKRaDrotVb5kpb4vK9Pp"
  );

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }


  const {name, email, phone, message} = req.body;


  try {

    await resend.emails.send({

      from: "Aatral Yoga <noreply@aatralyoga.com>",

      to: [
        "contact@aatralyoga.com"
      ],

      subject:
      `New Yoga Enquiry from ${name}`,

      html: `
        <h2>New Contact Request</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Phone:</b> ${phone}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>

      `
    });


    return res.status(200).json({
      success:true
    });


  } catch(error){

    return res.status(500).json({
      error:error.message
    });

  }

}