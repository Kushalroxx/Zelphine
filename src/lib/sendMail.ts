import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

// Type definition for Mailer class methods
interface IMailer {
    sendContactMail(email: string, name: string, phone: string, description: string, projectType: string): Promise<boolean>;
    sendOtp(email: string, otp: string): Promise<boolean>;
    sendPasswordMail(email: string, token: string): Promise<boolean>;
}

class Mailer implements IMailer {
    private static instance: Mailer;
    private transporter: nodemailer.Transporter;
    private appEmail: string;
    private adminEmail: string;
    private clientUrl: string;

    private constructor() {
        if (!process.env.APP_EMAIL || !process.env.APP_PASS || !process.env.ADMIN_USER_EMAIL || !process.env.CLIENT_URL) {
            console.error("Missing required environment variables for Mailer. Please check .env file.");
            throw new Error("Mailer: Missing environment variables.");
        }

        this.appEmail = process.env.APP_EMAIL;
        this.adminEmail = process.env.ADMIN_USER_EMAIL;
        this.clientUrl = process.env.CLIENT_URL;

        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: this.appEmail,
                pass: process.env.APP_PASS, 
            },
        });
    }

    public static init(): Mailer {
        if (!Mailer.instance) {
            Mailer.instance = new Mailer();
        }
        return Mailer.instance;
    }

    private sendMail(mailOptions: MailOptions): Promise<boolean> {
        return this.transporter.sendMail(mailOptions)
            .then(() => true)
            .catch((error) => {
                console.error("Error sending email:", error);
                return false;
            });
    }

    public async sendContactMail(email: string, name: string, phone: string, description: string, projectType: string): Promise<boolean> {
        const mailOptions: MailOptions = {
            from: `"ZELPHINE" <${this.appEmail}>`,
            to: this.adminEmail,
            subject: "New contact form submission",
            html: `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <title>contact form submission</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    background-color: #f6f9fc;
                    margin: 0;
                    padding: 0;
                  }
                  .container {
                    max-width: 600px;
                    margin: auto;
                    background: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                  }
                  .heading {
                    text-align: center;
                    font-size: 22px;
                    margin-bottom: 20px;
                  }
                  .content {
                    margin-bottom: 20px;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="heading">New contact form submission</div>
                  <div class="content">
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Project Type: ${projectType}</p>
                    <p>Description: ${description}</p>
                  </div>
                </div>
              </body>
            </html>`,
        };
        return this.sendMail(mailOptions);
    }

    public async sendOtp(email: string, otp: string): Promise<boolean> {
        const mailOptions: MailOptions = {
            from: `"ByteXylon" <${this.appEmail}>`, // Corrected string interpolation
            to: email,
            subject: "Your One-Time Password (OTP)",
            html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>OTP Email</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f6f9fc;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }
      .logo {
        text-align: center;
        margin-bottom: 20px;
      }
      .logo img {
        max-height: 50px;
      }
      .heading {
        text-align: center;
        font-size: 22px;
        color: #333;
        margin-bottom: 16px;
      }
      .otp-box {
        font-size: 30px;
        text-align: center;
        background-color: #f1f1f1;
        padding: 15px;
        letter-spacing: 10px;
        font-weight: bold;
        border-radius: 6px;
        margin: 20px 0;
        color: #111;
      }
      .text {
        text-align: center;
        font-size: 16px;
        color: #555;
        margin-bottom: 20px;
      }
      .footer {
        text-align: center;
        font-size: 13px;
        color: #999;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">
        <img src="https://yourdomain.com/logo.png" alt="ByteXylon" />
      </div>
      <div class="heading">Your One-Time Password (OTP)</div>
      <div class="otp-box">${otp}</div>
      <div class="text">Use this OTP to complete your login. The code is valid for 5 minutes.</div>
      <div class="text">If you did not request this, please ignore this email.</div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} ByteXylon. All rights reserved.
      </div>
    </div>
  </body>
</html>
`,
        };
        return this.sendMail(mailOptions);
    }

    public async sendPasswordMail(email: string, token: string): Promise<boolean> {
        const mailOptions: MailOptions = {
            from: `"ByteXylon" <${this.appEmail}>`, // Corrected string interpolation
            to: email,
            subject: "Your Password reset link",
            html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Password Reset</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9f9f9;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; padding: 40px 0;">
      <tr>
        <td align="center">
          <table width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 40px;">
            <tr>
              <td align="center" style="padding-bottom: 30px;">
                <h1 style="margin: 0; color: #333333; font-size: 24px;">Reset Your Password</h1>
              </td>
            </tr>
            <tr>
              <td style="color: #555555; font-size: 16px; line-height: 1.6;">
                <p>Hi there,</p>
                <p>You recently requested to reset your password. Click the button below to proceed.</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 30px 0;">
                <a href="${this.clientUrl}/reset-password/?token=${token}" style="
                  display: inline-block;
                  padding: 12px 24px;
                  background-color: #4fc3f7;
                  color: #ffffff;
                  text-decoration: none;
                  font-weight: bold;
                  border-radius: 6px;
                  font-size: 16px;
                ">
                  Reset Password
                </a>
              </td>
            </tr>
            <tr>
              <td style="color: #888888; font-size: 14px; line-height: 1.6;">
                <p>If you didn’t request this, you can safely ignore this email.</p>
                <p>This link will expire in 15 minutes.</p>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 30px; color: #cccccc; font-size: 12px; text-align: center;">
                © ${new Date().getFullYear()} ByteXylon. All rights reserved.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
        };
        return this.sendMail(mailOptions);
    }
}

// Global accessor for the Mailer singleton instance
// This is how you'll get the Mailer client throughout your application.
const mailerInstance = Mailer.init();
export default mailerInstance;