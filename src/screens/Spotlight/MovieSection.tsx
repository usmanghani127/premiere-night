import { ListView } from '@common/components/ListView';
import { MovieCard } from '@common/components/MovieCard';
import { Movie } from '@services/api/tmdb/types';
import { ListRenderItem } from 'react-native';
import { SectionContainer, SectionHeaderRow, SectionTitle } from './styles';

type MovieSectionProps = {
  title: string;
  movies: Movie[];
  onEndReached?: () => void;
};

export const MovieSection: React.FC<MovieSectionProps> = ({
  title,
  movies,
  onEndReached,
}) => {
  const renderMovie: ListRenderItem<Movie> = ({ item }) => (
    <MovieCard
      movie={item}
      onPress={() => console.log('Movie pressed:', item.title)}
    />
  );
  return (
    <SectionContainer>
      <SectionHeaderRow>
        <SectionTitle>{title}</SectionTitle>
      </SectionHeaderRow>
      <ListView
        horizontal
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item: Movie) => item.id.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </SectionContainer>
  );
};
