import { useStore } from '@hooks/useStore';
import React from 'react';
import { Header } from './Header';
import { MovieSection } from './MovieSection';
import { Container, ContentScrollView } from './styles';

export const Spotlight = () => {
  const { data: nowPlaying } = useStore(state => state.movies.nowPlaying);
  const { data: popular } = useStore(state => state.movies.popular);
  const { data: topRated } = useStore(state => state.movies.topRated);
  const { data: upcoming } = useStore(state => state.movies.upcoming);

  return (
    <Container>
      <Header />
      <ContentScrollView showsVerticalScrollIndicator={false}>
        <MovieSection title="Now Playing" movies={nowPlaying} />
        <MovieSection title="Popular" movies={popular} />
        <MovieSection title="Top Rated" movies={topRated} />
        <MovieSection title="Upcoming" movies={upcoming} />
      </ContentScrollView>
    </Container>
  );
};
