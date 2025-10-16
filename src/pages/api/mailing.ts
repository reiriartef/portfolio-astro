import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const EMAIL_ACCOUNT = import.meta.env.EMAIL_ACCOUNT;
const EMAIL_PASSWORD = import.meta.env.EMAIL_PASSWORD;

if (!EMAIL_ACCOUNT || !EMAIL_PASSWORD) {
  throw new Error(
    "Email account or password is not set in environment variables"
  );
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_ACCOUNT,
    pass: EMAIL_PASSWORD,
  },
});

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const { name, email, jobtitle, salary, contract, message } =
    Object.fromEntries(formData);

  if (!email || typeof email !== "string") {
    return new Response(JSON.stringify({ error: "Invalid email" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  await transporter.sendMail({
    from: EMAIL_ACCOUNT,
    to: EMAIL_ACCOUNT,
    subject: "New Inquiry - You have a new inquiry from your website.",
    text: `${name} - ${email} \nJob Title: ${jobtitle} \nSalary Offer: ${salary} \nContract Type: ${contract} \nMessage: ${message}`,
  });

  return new Response(JSON.stringify({ message: "Email sent successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
