import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const ContactSchema = zfd.formData({
  name: zfd.text().refine(() => true, { message: 'Name is required' }),
  organization: zfd.text(z.string().optional()),
  email: zfd.text(z.string().email()),
  subject: zfd.text(),
  message: zfd.text(),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
