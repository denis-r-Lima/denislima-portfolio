import { google } from "googleapis";
import nodemailer from "nodemailer";
import { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";

const TO_DECIPHER =
  "D1ErK0ShFtzbenRmtpE2/k8IKtQbQxbVSSNbqR6zJ8w8rIloriYVMC4BAUdnC0zSIRCled9zF0bgrODr5GFCMnmn5UlGS60qM/NKjB0UUrYWdiZ+67rFgsBC/INAPXSGHWwmo1+iyEfUvgB9vdzgqPnnQjP/xvLBJagGvv6jxi5HE5Z8f3tVSRAcgufIaZoOikfYmupfyhH7jYS/T0I0ng+Pnp20Y0UBlkfUE/B/T6YnJI4AM7XTR3Jq4OcjLOSLIq+7h0aa5U39z5rBPENA+OkKxOocS87NZ4RHYLeEDlKjFzCYvhcsa5c+7hcIOMS5bPr8wuMJMzRWEYzAE3EB49DZ3PpOofqatQpy9w//EDdJTPlIhOtp7llJZgg4hDeg1g1jbSIHq6Lqzdu8d5Yu+6+FRwq9Ft+iw630uPvyiLYxo2/mdEg4g2sqF8HvZ1Y9";

export default async (request: VercelRequest, response: VercelResponse) => {
  if (request.method === "POST") {
    const decipher = crypto.createDecipheriv(
      "aes-128-cbc",
      process.env.SERVICE_ENCRYPTION_KEY,
      process.env.SERVICE_ENCRYPTION_IV
    );
    let text = decipher.update(TO_DECIPHER, "base64", "utf-8");
    text += decipher.final("utf-8");
    const credentials = JSON.parse(text);
    const authClient = new google.auth.OAuth2(
      credentials.clientID,
      credentials.clientSecret,
      credentials.redirectUri
    );
    authClient.setCredentials({ refresh_token: credentials.refreshToken });
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
          clientId: credentials.clientID,
          clientSecret: credentials.clientSecret,
          refreshToken: credentials.refreshToken,
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
