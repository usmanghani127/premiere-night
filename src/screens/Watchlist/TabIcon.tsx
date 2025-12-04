import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';

export const WatchlistTabIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  return <MaterialDesignIcons name="bookmark" size={size} color={color} />;
};
