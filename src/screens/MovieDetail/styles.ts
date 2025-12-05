import { Colors } from '@theme/colors';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components';

export const Container = styled(SafeAreaView).attrs({
  edges: ['bottom', 'left', 'right'],
})<{ theme: DefaultTheme }>(({ theme: { layout = {} } = {} }) => ({
  flex: 1,
  backgroundColor: layout.isDarkMode ? Colors.black : Colors.white,
}));

export const ContentScrollView = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})({
  flex: 1,
});

export const PosterImage = styled(Image)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    width: layout.windowDimensions?.width || 0,
    height: (layout.windowDimensions?.width || 0) * 1.5,
  }),
);

export const InfoContainer = styled(View)({
  padding: 20,
  gap: 20,
});

export const Title = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    fontSize: 28,
    fontWeight: 'bold',
    color: layout.isDarkMode ? Colors.white : Colors.black,
  }),
);

export const Tagline = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    fontSize: 16,
    fontStyle: 'italic',
    color: layout.isDarkMode ? Colors.lightGray : Colors.darkGray,
  }),
);

export const MetaRow = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const MetaText = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    fontSize: 16,
    color: layout.isDarkMode ? Colors.lightGray : Colors.darkGray,
    marginRight: 15,
  }),
);

export const RatingContainer = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: Colors.primary,
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 4,
  marginRight: 15,
});

export const RatingText = styled(Text)({
  color: Colors.white,
  fontWeight: 'bold',
  marginLeft: 4,
});

export const SectionTitle = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    fontSize: 20,
    fontWeight: 'bold',
    color: layout.isDarkMode ? Colors.white : Colors.black,
  }),
);

export const Synopsis = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    fontSize: 16,
    lineHeight: 24,
    color: layout.isDarkMode ? Colors.lightGray : Colors.darkGray,
  }),
);

export const GenreContainer = styled(View)({
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginVertical: 15,
  gap: 10,
});

export const GenreTag = styled(View)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    backgroundColor: layout.isDarkMode ? Colors.darkGray : Colors.lightGray,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  }),
);

export const GenreText = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    color: layout.isDarkMode ? Colors.white : Colors.black,
    fontSize: 14,
  }),
);

export const ProductionContainer = styled(View)({
  gap: 10,
});

export const ProductionTitle = styled(SectionTitle)({
  fontSize: 16,
});

export const ProductionText = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    fontSize: 14,
    color: layout.isDarkMode ? Colors.gray : Colors.darkGray,
  }),
);

export const WatchlistButton = styled(TouchableOpacity)<{ isAdded: boolean }>(
  ({ isAdded }) => ({
    backgroundColor: isAdded ? Colors.red : Colors.primary,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  }),
);

export const WatchlistButtonText = styled(Text)({
  color: Colors.white,
  fontSize: 16,
  fontWeight: 'bold',
});
