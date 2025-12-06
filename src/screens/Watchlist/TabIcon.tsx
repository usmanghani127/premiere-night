import { BookmarkIcon } from '@common/components/MovieCard/styles';

export const WatchlistTabIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  return <BookmarkIcon name="bookmark" size={size} color={color} />;
};
