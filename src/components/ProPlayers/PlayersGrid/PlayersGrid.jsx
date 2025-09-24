import s from './PlayersGrid.module.scss';
import { Fragment } from 'react';
import ProPlayerCard from '@/components/ProPlayers/ProPlayerCard/ProPlayerCard';
import ProPlayerCardSkeleton from '@/components/ProPlayers/ProPlayerCardSkeleton/ProPlayerCardSkeleton';
import getAllPlayers from '@/lib/getAllPlayers';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchPlayers = ({ pageParam = 1, orderBy }) => {
  return getAllPlayers(pageParam, orderBy);
};

const PlayersGrid = ({ orderBy }) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['players', orderBy],
    queryFn: ({ pageParam = 1 }) => fetchPlayers({ pageParam, orderBy }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nextPage = lastPageParam + 1;
      const totalPages = Number(lastPage.meta.pagination.pageCount);
      return nextPage <= totalPages && lastPage.data.length > 0 ? nextPage : undefined;
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <ProPlayerCardSkeleton />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className={s.cardsGrid}>
        {data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.data.map((player) => (
              <ProPlayerCard key={player.id} player={player} /> 
            ))}
          </Fragment>
        ))}
      </div>

      {isFetchingNextPage && <ProPlayerCardSkeleton />}

      {hasNextPage && (
        <div className={s.btnWrapper}>
          <button 
            onClick={() => fetchNextPage()} 
            disabled={isFetchingNextPage} 
            type='button' 
            className={`${s.buttonMore} ${isFetchingNextPage ? s.loading : ''}`}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : 'More Pro-Players'
            }
          </button>
        </div>
      )}
    </>
  )
}

export default PlayersGrid