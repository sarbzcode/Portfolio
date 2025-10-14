import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.SERVER_PORT || process.env.PORT || 5000);

const allowedOrigins = process.env.CLIENT_ORIGIN
  ? process.env.CLIENT_ORIGIN.split(',').map((origin) => origin.trim()).filter(Boolean)
  : undefined;

app.use(
  cors({
    origin: allowedOrigins && allowedOrigins.length > 0 ? allowedOrigins : true,
  })
);
app.use(express.json());

const requiredEnv = ['EMAIL_USER', 'EMAIL_PASS'];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  console.warn(
    `[contact-service] Missing required email credentials: ${missingEnv.join(', ')}. ` +
      'POST /api/contact will return 500 until they are configured.'
  );
}

const resolvedPort = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 587;
const transporterConfig = {
  host: process.env.EMAIL_HOST || (process.env.EMAIL_SERVICE ? undefined : 'smtp.gmail.com'),
  port: resolvedPort,
  secure: process.env.EMAIL_SECURE
    ? process.env.EMAIL_SECURE.toLowerCase() === 'true'
    : resolvedPort === 465,
  service: process.env.EMAIL_SERVICE || undefined,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(transporterConfig);

app.post('/api/contact', async (request, response) => {
  if (missingEnv.length > 0) {
    return response.status(500).json({
      ok: false,
      error: 'Email service is not configured on the server.',
    });
  }

  const { name, email, message } = request.body ?? {};

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return response.status(400).json({
      ok: false,
      error: 'Message is required.',
    });
  }

  const normalisedEmail = typeof email === 'string' ? email.trim() : '';
  const normalisedName = typeof name === 'string' ? name.trim() : '';

  const mailOptions = {
    from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
    to: email,
    replyTo: normalisedEmail || undefined,
    subject: `New portfolio message from ${normalisedName || 'a visitor'}`,
    text: [
      `Name: ${normalisedName || 'Not provided'}`,
      `Email: ${normalisedEmail || 'Not provided'}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `<h3>New message from your portfolio</h3>
<p><strong>Name:</strong> ${normalisedName || 'Not provided'}</p>
<p><strong>Email:</strong> ${normalisedEmail || 'Not provided'}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br />')}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error sending contact email', error);
    return response.status(500).json({
      ok: false,
      error: 'Failed to send message.',
    });
  }
});

app.get('/api/health', (_request, response) => {
  response.json({ ok: true });
});

app.listen(port, () => {
  console.log(`[contact-service] Contact service listening on port ${port}`);
});
