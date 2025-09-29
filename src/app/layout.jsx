import Footer from '@/components/Common/Footer/Footer';
import Navigation from '@/components/Common/Navigation/Navigation';
import '../styles/global.scss';
import '../styles/app.css';
import './i18n';
import { poppins } from '@/app/fonts';
import { GoogleTagManager } from '@next/third-parties/google';
import QueryProvider from '@/components/Common/QueryProvider/QueryProvider'

// export const metadata = {
//   title: {
//     default: 'Trading Ecosystem for Gamers | Javes',
//     template: '%s | Javes',
//   },
//   description: 'Welcome to Javes - Trading Ecosystem for Gamers',
//   metadataBase: new URL('https://javes.co/'),
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={poppins.className}>
      <body className={'flex flex-col min-h-screen'}>
        <GoogleTagManager gtmId="GTM-5F3T3Q9S" />
        <div className='page-conteiner'>
          <Navigation />
            <QueryProvider>{children}</QueryProvider>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
