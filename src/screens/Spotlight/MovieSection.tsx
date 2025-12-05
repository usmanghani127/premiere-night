import { ListView } from '@common/components/ListView';
import { MovieCard } from '@common/components/MovieCard';
import { AppNavigatorProps } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Movie } from '@services/api/tmdb/types';
import { Colors } from '@theme/colors';
import { ActivityIndicator } from 'react-native';
import { SectionContainer, SectionHeaderRow, SectionTitle } from './styles';

type MovieSectionProps = {
  title: string;
  movies: Movie[];
  onEndReached?: () => void;
  isLoading: boolean;
};

export const MovieSection: React.FC<MovieSectionProps> = ({
  title,
  movies,
  isLoading,
  onEndReached,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppNavigatorProps, 'Spotlight'>>();

  return (
    <SectionContainer>
      <SectionHeaderRow>
        <SectionTitle>{title}</SectionTitle>
        {isLoading && <ActivityIndicator size="small" color={Colors.primary} />}
      </SectionHeaderRow>
      <ListView
        horizontal
        data={movies}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate('MovieDetail', { movieId: item.id })
            }
          />
        )}
        keyExtractor={(item: Movie) => item.id.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </SectionContainer>
  );
};
