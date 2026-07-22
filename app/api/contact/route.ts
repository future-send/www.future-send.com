// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const { name, email, message } = await request.json();

//     // Basic validation
//     if (!name || !email || !message) {
//       return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
//     }

//     await resend.emails.send({
//       from: "FutureSend <crid71@gmail.com>", // <-- Cambia con il tuo dominio verificato
//       to: ["crid71@gmail.com"], // <-- Cambia con la tua email
//       replyTo: email,
//       subject: `New Contact Form - ${name}`,

//       html: `
//         <div style="font-family:Arial,sans-serif;padding:24px">

//           <h2>New Contact Form Submission</h2>

//           <table cellpadding="8" cellspacing="0">

//             <tr>
//               <td><strong>Name:</strong></td>
//               <td>${name}</td>
//             </tr>

//             <tr>
//               <td><strong>Email:</strong></td>
//               <td>${email}</td>
//             </tr>

//           </table>

//           <h3>Message</h3>

//           <p style="white-space:pre-wrap">
//             ${message}
//           </p>

//         </div>
//       `,
//     });

//     return NextResponse.json(
//       {
//         success: true,
//       },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: "Unable to send email.",
//       },
//       { status: 500 },
//     );
//   }
// }
