import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { Resend } from 'resend';

function contactApiPlugin(env) {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const parsedData = JSON.parse(body || '{}');
              const { name, email, message } = parsedData;

              const cleanName = (name || '').trim();
              const cleanEmail = (email || '').trim().toLowerCase();
              const cleanMessage = (message || '').trim();

              if (!cleanName || !cleanEmail || !cleanMessage) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ success: false, error: 'All fields (Name, Email, Message) are required.' }));
              }

              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(cleanEmail)) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ success: false, error: 'Please enter a valid email address.' }));
              }

              const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;

              if (!apiKey) {
                console.error("Resend error: RESEND_API_KEY environment variable is missing.");
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ 
                  success: false, 
                  error: 'RESEND_API_KEY is missing. Please set RESEND_API_KEY in your .env file.' 
                }));
              }

              const resend = new Resend(apiKey);
              const recipientEmail = env.EMAIL_TO || process.env.EMAIL_TO || 'vsurya2107@gmail.com';
              const senderEmail = env.EMAIL_FROM || process.env.EMAIL_FROM || 'Portfolio Contact <onboarding@resend.dev>';
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
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({
                  success: false,
                  error: error.message || 'Email sending failed. Please try again.'
                }));
              }

              if (!data?.id) {
                console.error("Portfolio contact email error: Resend did not return an email ID.");
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({
                  success: false,
                  error: 'Resend did not return an email ID.'
                }));
              }

              console.log("Portfolio contact email ID:", data.id);

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ success: true, emailId: data.id, id: data.id }));
            } catch (err) {
              console.error("Portfolio contact email error:", err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({
                success: false,
                error: err.message || 'Message could not be delivered. Please try again.'
              }));
            }
          });
        } else {
          next();
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [react(), tailwindcss(), contactApiPlugin(env)],
  };
});
