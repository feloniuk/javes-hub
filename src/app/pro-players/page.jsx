import ProPlayersPage from '@/components/Pages/ProPlayersPage/ProPlayersPage';
import PlayersList from '@/components/ProPlayers/PlayersList/PlayersList';
import { Suspense } from 'react';

export default function ProPlayers() {
  return (
    <ProPlayersPage>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <PlayersList />
        </Suspense>
      </main>
    </ProPlayersPage>
  );
}