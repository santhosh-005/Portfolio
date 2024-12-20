import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const VITE_SMTP_EMAIL = process.env.VITE_SMTP_EMAIL;
  const VITE_SMTP_PASS = process.env.VITE_SMTP_PASS;
  const VITE_RECEIVER_EMAIL = process.env.VITE_RECEIVER_EMAIL;

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: VITE_SMTP_EMAIL, 
          pass: VITE_SMTP_PASS, 
        },
      });

      const mailOptions = {
        from: VITE_SMTP_EMAIL,
        to:  VITE_RECEIVER_EMAIL, 
        subject: `New message from ${name}`,
        html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send the message.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
