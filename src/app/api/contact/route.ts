import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    const htmlMessage = `
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Contact Form Submission</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif; color: #333;">
    <!-- Container table to center and constrain width -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; padding: 20px 0;">
      <tr>
        <td align="center">
          <!-- Inner table for the actual email content -->
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:4px; overflow:hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            
            <!-- Header / Banner -->
            <tr>
              <td style="background-color:#34D399; padding: 20px; text-align:center;">
                <h1 style="margin:0; font-size:24px; color:#ffffff; line-height:1.2;">New Contact Form Submission</h1>
              </td>
            </tr>
            
            <!-- Body Content -->
            <tr>
              <td style="padding: 30px;">
                
                <!-- Greeting -->
                <p style="margin-top:0; margin-bottom:20px; font-size:16px; line-height:1.5;">
                  Hello Greg,
                </p>
                
                <!-- Summary line -->
                <p style="margin-top:0; margin-bottom:20px; font-size:14px; line-height:1.5; color:#555;">
                  You have a new submission from your website's contact form. Below are the details:
                </p>
                
                <!-- Details Section -->
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:30px;">
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; width:150px;">First Name:</td>
                    <td style="padding:8px 0;">${firstName}</td>
                  </tr>
                  <tr style="background-color:#f9f9f9;">
                    <td style="padding:8px 0; font-weight:bold;">Last Name:</td>
                    <td style="padding:8px 0;">${lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; font-weight:bold;">Email:</td>
                    <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#34D399; text-decoration:none;">${email}</a></td>
                  </tr>
                  <tr style="background-color:#f9f9f9;">
                    <td style="padding:8px 0; font-weight:bold;">Subject:</td>
                    <td style="padding:8px 0;">${subject || "No Subject"}</td>
                  </tr>
                </table>
                
                <!-- Message Content -->
                <p style="margin-top:0; margin-bottom:8px; font-weight:bold; font-size:14px; line-height:1.5;">
                  Message:
                </p>
                <div style="padding:10px 15px; background-color:#f1f1f1; border-radius:4px; font-size:14px; line-height:1.6; color:#444;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
                
                <!-- Divider -->
                <hr style="margin:30px 0; border:none; border-top:1px solid #e0e0e0;" />
                
                <!-- Footer Note -->
                <p style="margin-top:0; margin-bottom:0; font-size:12px; line-height:1.4; color:#777;">
                  This email was automatically generated from your website's contact form. If you did not expect this submission, please ignore.<br />
                  &copy; ${new Date().getFullYear()} gregjflores.com
                </p>
              </td>
            </tr>
            
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    try {
        await resend.emails.send({
            from: `"Portfolio Contact Form" <greg@gregjflores.com>`,
            to: "greg@gregjflores.com",
            subject: subject || "Contact Form Submission",
            html: htmlMessage,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, error: "Failed to send message." }, { status: 500 });
    }
}
