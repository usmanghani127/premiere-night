import { ListView } from '@common/components/ListView';
import { MovieCard } from '@common/components/MovieCard';
import { Movie } from '@services/redux/movies/types';
import { ListRenderItem } from 'react-native';
import { SectionContainer, SectionHeaderRow, SectionTitle } from './styles';

type MovieSectionProps = {
  title: string;
  movies: Movie[];
};

export const MovieSection: React.FC<MovieSectionProps> = ({
  title,
  movies,
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
      />
    </SectionContainer>
  );
};
