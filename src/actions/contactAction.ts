'use server';

import { TransactionalEmailsApi, SendSmtpEmail } from '@getbrevo/brevo';
import { ContactFormData } from '@/app/contact-us/schema';

const apiInstance = new TransactionalEmailsApi();

const apiKey = apiInstance['authentications']['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY as string;

const sendSmtpEmail = new SendSmtpEmail();

export const sendEmail = async ({ data }: { data: ContactFormData }) => {
  const { name, email, organization, subject, message } = data;

  sendSmtpEmail.subject = `New Contact from ${name}`;
  sendSmtpEmail.htmlContent = `
    <h1>New Contact from ${name}</h1>
    <p><h2>Subject:</h2> ${subject}</p>
    <p><h2>Email:</h2> ${email}</p>
    <p><h2>Organization:</h2> ${organization}</p>
    <p><h2>Message:</h2> ${message}</p>
  `;
  sendSmtpEmail.sender = {
    name,
    email,
  };

  sendSmtpEmail.to = [{ email: process.env.CONTACT_EMAIL as string}]

  return await apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(
        'API called successfully. Returned data: ' + JSON.stringify(data),
      );
    },
    function (error) {
      console.error(error);
    },
  ).catch((error) => {
    console.error(error);
  })
};
