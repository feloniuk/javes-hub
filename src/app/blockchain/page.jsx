import BlockchainPage from '@/components/Pages/BlockchainPage/BlockchainPage';
import BlockchainHero from '@/components/Blockchain/BlockchainHero/BlockchainHero';
import Mission from '@/components/Blockchain/Mission/Mission';
import GuildTokens from '@/components/Blockchain/GuildTokens/GuildTokens';
import Soulbound from '@/components/Blockchain/Soulbound/Soulbound';
import Tokenization from '@/components/Blockchain/Tokenization/Tokenization';
import Rewards from '@/components/Blockchain/Rewards/Rewards';
import Glow from '@/components/Common/Glow/Glow';

export default function Blockchain() {
  return (
    <BlockchainPage>
      <header>
        <BlockchainHero />
      </header>

      <main>
        <Mission />
        <GuildTokens />
        <Glow className='rightBlockchainWrapper' glowLink='/assets/glow/right-bottom-glow.svg' />
        <Soulbound />
        <Tokenization />
        <Glow className='leftBlockchainWrapper' glowLink='/assets/glow/left-glow.svg' />
        <Rewards />
      </main>
    </BlockchainPage>
  );
}