import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Colors } from '@theme/colors';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styled, { DefaultTheme } from 'styled-components';

export const Card = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})<{ theme: DefaultTheme; width?: number | string }>(({ theme, width }) => ({
  width: width || theme.layout.smallerDimension * 0.4,
  marginRight: width ? 0 : 12,
  marginBottom: width ? 12 : 0,
  borderRadius: 10,
  backgroundColor: theme.layout.isDarkMode ? Colors.darkGray : Colors.lightGray,
}));

export const PosterImage = styled(Image)<{ theme: DefaultTheme }>(
  ({ theme }) => ({
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: theme.layout.largerDimension * 0.2,
    backgroundColor: Colors.gray,
  }),
);

export const InfoContainer = styled(View)({
  flex: 1,
  padding: 10,
  justifyContent: 'space-between',
});

export const Title = styled(Text)<{ theme: DefaultTheme }>(({ theme }) => ({
  fontSize: 15,
  fontWeight: 'bold',
  color: theme.layout.isDarkMode ? Colors.white : Colors.black,
  marginBottom: 5,
}));

export const RatingContainer = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
});

export const Rating = styled(Text)({
  fontSize: 12,
  color: Colors.primary,
  fontWeight: 'bold',
});

export const ActionButton = styled(TouchableOpacity)({
  position: 'absolute',
  top: 8,
  right: 8,
  zIndex: 10,
  backgroundColor: Colors.overlay,
  borderRadius: 20,
  padding: 6,
});

export const BookmarkIcon = styled(MaterialDesignIcons)({
  size: 20,
  color: Colors.white,
});

export const StarIcon = styled(MaterialDesignIcons).attrs({
  size: 15,
  color: Colors.primary,
})({});
