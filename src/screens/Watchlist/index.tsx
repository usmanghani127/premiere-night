import { ListView } from '@common/components/ListView';
import { useStore } from '@hooks/useStore';
import { Header } from '@screens/Spotlight/Header';
import { Body, Container } from './styles';
import { WatchlistItem } from './WatchlistItem';

export const Watchlist = () => {
  const { data: watchlist } = useStore(state => state.watchlist.items);

  return (
    <Container>
      <Header />
      <Body>
        <ListView
          data={watchlist}
          renderItem={({ item }) => <WatchlistItem movieId={item} />}
          keyExtractor={item => item.toString()}
        />
      </Body>
    </Container>
  );
};
