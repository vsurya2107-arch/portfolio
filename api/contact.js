import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body || {};

    const cleanName = (name || '').trim();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanMessage = (message || '').trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({ success: false, error: 'All fields (Name, Email, Message) are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Portfolio contact email error: RESEND_API_KEY environment variable is missing.");
      return res.status(500).json({
        success: false,
        error: 'RESEND_API_KEY is missing. Please set RESEND_API_KEY in environment variables.'
      });
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.EMAIL_TO || 'vsurya2107@gmail.com';
    const senderEmail = process.env.EMAIL_FROM || 'Portfolio Contact <onboarding@resend.dev>';
    const subject = `Portfolio Contact — New Message from ${cleanName}`;

    const textContent = `New Portfolio Contact Message\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nTimestamp: ${new Date().toISOString()}\n\nMessage:\n${cleanMessage}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 24px; color: #111; max-width: 600px; border: 1px solid #e4e4e7; border-radius: 12px;">
        <h2 style="color: #FF0033; margin-top: 0; font-size: 20px;">New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;" />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f4f4f5; padding: 16px; border-radius: 8px; line-height: 1.6;">${cleanMessage}</p>
      </div>
    `;

    console.log("REAL CONTACT SUBMISSION:", {
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage
    });

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      subject: subject,
      replyTo: cleanEmail,
      reply_to: cleanEmail,
      text: textContent,
      html: htmlContent
    });

    if (error) {
      console.error("Portfolio contact email error:", error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Email sending failed. Please try again.'
      });
    }

    if (!data?.id) {
      console.error("Portfolio contact email error: Resend did not return an email ID.");
      return res.status(500).json({
        success: false,
        error: 'Resend did not return an email ID.'
      });
    }

    console.log("Portfolio contact email ID:", data.id);

    return res.status(200).json({ success: true, emailId: data.id, id: data.id });
  } catch (err) {
    console.error("Portfolio contact email error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Message could not be delivered. Please try again.'
    });
  }
}
