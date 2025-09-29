'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Input } from '@/components/new/Input';
import { useTranslation } from '@/app/i18n/client';
import { Button } from '@/components/new/Button/Button';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import { sendEmail } from '@/actions/contactAction';
import { ContactSchema } from '@/app/contact-us/schema';
import { useFormStatus } from "react-dom";


const defaultErrors = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const SubmitButton = () => {
  const {t} = useTranslation('contact_us', {lng: 'en'});
  const {pending} = useFormStatus();
  return  <Button
    disabled={pending}
    className={'flex-grow-0 w-fit mx-auto px-16'}
    kind={'primary'}
    size={'md'}
    type={'submit'}
  >
    {pending ? t('form.sending') : t('form.submit')}
  </Button>
}

const ContactFormRaw = () => {
  const { t } = useTranslation('contact_us', { lng: 'en' });
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formSuccess, setFormSuccess] = useState(false);
  const [errors, setErrors] = useState(defaultErrors);

  const formRef = useRef<HTMLFormElement>(null);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.error('Execute recaptcha not yet available');
      return;
    }
    console.info('Executing recaptcha');
    return await executeRecaptcha('submit');
  }, [executeRecaptcha]);

  useEffect(() => {
    if (formSuccess) {
      formRef.current?.reset();
    }
  }, [formSuccess, formRef]);


  const clientAction = async (formData: FormData) => {
    const { data, error, success } = ContactSchema.safeParse(formData);
    const flatErrors = error?.flatten((issue) => {
      return  issue.message === 'Required' ?  t(`form.${issue.path}.required`) : issue.message
    });

    if(flatErrors) {
      const flatError = flatErrors.fieldErrors;
      setErrors({
        // @ts-ignore
        name: flatError.name?.[0] || '',
        // @ts-ignore
        email: flatError.email?.[0] || '',
        // @ts-ignore
        subject: flatError.subject?.[0] || '',
        // @ts-ignore
        message: flatError.message?.[0] || '',
      });
    }

    if(data && success) {
      setErrors(defaultErrors);
      await handleReCaptchaVerify();
      return await sendEmail({ data }).then(() => {
        setFormSuccess(true);
      });
    }
  };


  return (
    <form
      action={clientAction}
      method={'POST'}
      className={'flex flex-col gap-6 mb-6'}
      ref={formRef}
    >
      <div className={'flex flex-col gap-6 tablet:flex-row'}>
        <Input
          className={'w-full tablet:w-1/2'}
          label={t('form.name.label')}
          id={'contact-name'}
          type={'text'}
          name={'name'}
          placeholder={t('form.name.placeholder')}
          required
          status={errors.name ? 'error' : undefined}
          message={errors.name ?? ''}
        />
        <Input
          className={'w-full tablet:w-1/2'}
          label={t('form.organization.label')}
          id={'contact-organization'}
          type={'text'}
          name={'organization'}
          placeholder={t('form.organization.placeholder')}
        />
      </div>
      <div className={'flex flex-col gap-6 tablet:flex-row'}>
        <Input
          className={'w-full tablet:w-1/2'}
          label={t('form.email.label')}
          id={'contact-email'}
          type={'email'}
          name={'email'}
          placeholder={t('form.email.placeholder')}
          required
          status={errors.email ? 'error' : undefined}
          message={errors.email ?? ''}
        />
        <Input
          className={'w-full tablet:w-1/2'}
          label={t('form.subject.label')}
          id={'contact-subject'}
          type={'text'}
          name={'subject'}
          placeholder={t('form.subject.placeholder')}
          required
          status={errors.subject ? 'error' : undefined}
          message={errors.subject ?? ''}
        />
      </div>
      <Input
        label={t('form.message.label')}
        id={'contact-message'}
        type={'text'}
        placeholder={t('form.message.placeholder')}
        variant={'textarea'}
        name={'message'}
        required
        status={errors.message ? 'error' : undefined}
        message={errors.message ?? ''}
      />
      {formSuccess ? <div className={'my-4 text-body-xs-desktop text-accents-green'}>{t('success-message')}</div> : null}
      <SubmitButton />
    </form>
  );
};

export const ContactForm = () => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
  >
    <ContactFormRaw />
  </GoogleReCaptchaProvider>
);
