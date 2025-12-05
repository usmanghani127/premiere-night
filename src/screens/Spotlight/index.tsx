import React from 'react';
import { Header } from './Header';
import {
  NowPlayingSection,
  PopularSection,
  TopRatedSection,
  UpcomingSection,
} from './sections';
import { Container, ContentScrollView } from './styles';

export const Spotlight = () => {
  return (
    <Container>
      <Header />
      <ContentScrollView showsVerticalScrollIndicator={false}>
        <NowPlayingSection />
        <PopularSection />
        <TopRatedSection />
        <UpcomingSection />
      </ContentScrollView>
    </Container>
  );
};
