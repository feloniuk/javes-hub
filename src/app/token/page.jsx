import TokenPage from '@/components/Pages/TokenPage/TokenPage';
import TokenHero from '@/components/Token/TokenHero/TokenHero';
import Fuel from '@/components/Token/Fuel/Fuel';
import Purchasing from '@/components/Token/Purchasing/Purchasing';
import Deals from '@/components/Token/Deals/Deals';
import Advertisement from '@/components/Token/Advertisement/Advertisement';
import Customizations from '@/components/Token/Customizations/Customizations';
import Plans from '@/components/Token/Plans/Plans';
import Glow from '@/components/Common/Glow/Glow';

export default function Token() {
  return (
    <TokenPage>
      <header>
        <TokenHero />
      </header>

      <main>
        <Fuel />
        <Purchasing />
        <Glow className='rightTopTokenWrapper' glowLink='/assets/glow/right-top-glow.svg' />
        <Deals />
        <Advertisement />
        <Glow className='leftTopTokenWrapper' glowLink='/assets/glow/left-glow.svg' />
        <Customizations />
        <Glow className='leftBottomTokenWrapper' glowLink='/assets/glow/left-glow.svg' />
        <Plans />
        <Glow className='rightBottomTokenWrapper' glowLink='/assets/glow/right-bottom-glow.svg' />
      </main>
    </TokenPage>
  );
}