import { ListView } from '@common/components/ListView';
import { useStore } from '@hooks/useStore';
import { Header } from '@screens/Spotlight/Header';
import { useTranslation } from 'react-i18next';
import { Body, Container, EmptyText } from './styles';
import { WatchlistItem } from './WatchlistItem';

export const Watchlist = () => {
  const { t } = useTranslation();
  const { data: watchlist } = useStore(state => state.watchlist.items);

  return (
    <Container>
      <Header />
      <Body>
        <ListView
          data={watchlist}
          renderItem={({ item }) => <WatchlistItem movieId={item} />}
          keyExtractor={item => item.toString()}
          ListEmptyComponent={<EmptyText>{t('Watchlist.empty')}</EmptyText>}
        />
      </Body>
    </Container>
  );
};
