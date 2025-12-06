import { MovieTabIcon } from './styles';

export const SpotlightTabIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  return <MovieTabIcon name="movie" size={size} color={color} />;
};
