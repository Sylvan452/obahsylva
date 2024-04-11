import { Resend } from 'resend';
import { EmailTemplate } from '../../components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'contact@obahsylva.com',
      to: ['sylvan452@gmail.com'],
      cc: ['contact@obahsylva.com'],
      subject: 'Hello',
      react: EmailTemplate({ firstName: 'Sylva' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
