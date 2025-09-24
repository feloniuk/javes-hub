import TokensalePage from '@/components/Pages/TokensalePage/TokensalePage';
import TokensaleHero from '@/components/Tokensale/TokensaleHero/TokensaleHero';
import Approach from '@/components/Tokensale/Approach/Approach';
import Round from '@/components/Tokensale/Round/Round';
import Apply from '@/components/Tokensale/Apply/Apply';
import Tokenomics from '@/components/Tokensale/Tokenomics/Tokenomics';
import Roadmap from '@/components/Tokensale/Roadmap/Roadmap';
import Glow from '@/components/Common/Glow/Glow';

export default function Token() {
  return (
    <TokensalePage>
      <header>
        <TokensaleHero />
      </header>

      <main>
        <Approach />
        <Round />
        <Apply />
        <Tokenomics />
        <Glow className='leftTokensaleWrapper' glowLink='/assets/glow/left-glow.svg' />
        <Roadmap />
      </main>
    </TokensalePage>
  );
}