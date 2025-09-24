import TeamPage from '@/components/Pages/TeamPage/TeamPage';
import OurTeam from '@/components/Team/TeamSection/OurTeam/OurTeam';
import Advisors from '@/components/Team/AdvisorsSection/Advisors/Advisors';
import Partners from '@/components/Team/PartnersSection/Partners/Partners';
import Glow from '@/components/Common/Glow/Glow';

export default function Team() {
  return (
    <TeamPage>
      <main>
        <OurTeam />
        <Glow className='rightTeamWrapper' glowLink='/assets/glow/right-bottom-glow.svg' />
        <Glow className='leftTeamWrapper' glowLink='/assets/glow/left-glow.svg' />
        <Advisors />
        <Partners />
      </main>
    </TeamPage>
  );
}
