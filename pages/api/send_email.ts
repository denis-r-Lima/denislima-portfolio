import { google } from "googleapis";
import nodemailer from "nodemailer";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (request: VercelRequest, response: VercelResponse) => {
  if (request.method === "POST") {
    const authClient = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    );
    authClient.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
    try {
      const accessToken = await authClient.getAccessToken();

      authClient.setCredentials({ access_token: accessToken.token });
      const gmail = google.gmail({
        version: "v1",
        auth: authClient,
      });
      const transport = nodemailer.createTransport({
        //@ts-ignore
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "denis.r.lima88@gmail.com",
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      const { name, email, message } = JSON.parse(request.body);

      const emailText = `From: ${name} <${email}> \n\n${message}`;

      const mailOptions = {
        from: "Myself <denis.r.lima88@gmail.com>",
        to: "Denis Lima <denis_lima88@hotmail.com>",
        subject: "Some one sent a message using your portfolio",
        text: emailText,
      };
      await transport.sendMail(mailOptions);
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .send(JSON.stringify({ message: "Failed to send email" }));
    }
    return response
      .status(200)
      .send(JSON.stringify({ message: "Email successfully sent" }));
  } else {
    return response
      .status(405)
      .send(JSON.stringify({ message: "Method not allowed" }));
  }
};
