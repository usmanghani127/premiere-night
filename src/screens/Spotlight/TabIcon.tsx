import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';

export const SpotlightTabIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  return <MaterialDesignIcons name="movie" size={size} color={color} />;
};
