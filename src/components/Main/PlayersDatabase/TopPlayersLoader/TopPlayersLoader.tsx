import PlayerCard from '@/components/Main/PlayersDatabase/PlayerCard/PlayerCard';
import SectionButton from '@/components/Common/SectionButton/SectionButton';
import { getTopPlayers } from '@/actions/playersAction';

export default async function TopPlayersLoader() {
  let playersData;
  
  try {
    console.log('Loading top players...');
    playersData = await getTopPlayers();
    console.log('Players loaded:', playersData.data?.length || 0);
  } catch (error) {
    console.error('Error loading top players:', error);
    
    // Fallback на статические данные
    const fallbackPlayers = [
      {
        id: 1,
        avatar: "/assets/home/players/reborn-team-avatar.webp",
        name: "Reborn Team",
        completedDealsCount: 2068
      },
      {
        id: 2,
        avatar: "/assets/home/players/sefuz-club-avatar.webp",
        name: "Sefuz Club",
        completedDealsCount: 689
      },
      {
        id: 3,
        avatar: "/assets/home/players/pollka-avatar.webp",
        name: "Pollka",
        completedDealsCount: 522
      },
      {
        id: 4,
        avatar: "/assets/home/players/the-necro-avatar.webp",
        name: "TheNecro",
        completedDealsCount: 155
      }
    ];
    
    return (
      <>
        {fallbackPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            deals={player.completedDealsCount}
          />
        ))}
        <SectionButton href='/pro-players' disabled={false}>
          <span>Explore all <br /> <span className='bold'>Pro-Players</span></span>
        </SectionButton>
      </>
    );
  }
  
  if (!playersData?.data || playersData.data.length === 0) {
    return <div>No players found</div>;
  }
  
  return (
    <>
      {playersData.data.map((player) => (
        <PlayerCard
          key={player.id}
          avatar={player.avatar?.thumbnail?.url 
            ? `https://adm.mmonster.co${player.avatar.thumbnail.url}` 
            : '/assets/home/pro-players/avatar-helmet.svg'}
          name={player.name}
          deals={player.completedDealsCount}
        />
      ))}

      <SectionButton href='/pro-players' disabled={false}>
        <span>Explore all <br /> <span className='bold'>Pro-Players</span></span>
      </SectionButton>
    </>
  );
}