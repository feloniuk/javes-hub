import { useTranslation } from '@/app/i18n';
import { Trans } from 'react-i18next/TransWithoutContext';
import { ContactForm } from './components/ContactForm';
import Glow from '@/components/Common/Glow/Glow';
import { ContactCard } from '@/app/contact-us/components/ContactCard';

const ContactUsPage = async () => {
  const { t } = await useTranslation('en', 'contact_us');
  return (
    <>
      <Glow className='rightContactWrapper' glowLink='/assets/glow/right-bottom-glow.svg' />
      <title>{t('page_title') + ' | Javes'}</title>
      <main className={'pt-36 px-4 tablet:px-12 desktop:px-14 text-h2-mobile mb-[100px] max-w-[1440px] mx-auto'}>
        <h1 className={'mb-6 font-bold'}><Trans ns={'contact_us'} i18nKey={'title'} components={{gradient: <span className={'gradient-text'}/>}}/></h1>
        <article className={'text-body-l-mobile mb-12'}>
          {t('description')}
        </article>
        <div className={'flex flex-col gap-y-12 desktop:flex-row'}>
          <div className={'desktop:w-1/2'}>
            <ContactForm />
          </div>
          <div className={'desktop:w-1/2'}>
            <ContactCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUsPage;
