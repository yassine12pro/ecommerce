// import { Resend } from 'resend';
// import {EmailTemplate} from "../../_components/EmailTemplate"

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   const body = await req.json();
//   try {
//     const data = await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: [body.email],
//       subject: 'Payment Confirmation: Your Order Successfully Processed!',
//       react: EmailTemplate({ body }),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }



import {EmailTemplate} from "../../_components/EmailTemplate"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req) {
  const body = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [body.email],
      subject: 'Confirmation of Payment for Your Recent Order',
      react: EmailTemplate({ body }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
