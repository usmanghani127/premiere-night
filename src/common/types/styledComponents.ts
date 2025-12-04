import { ScaledSize } from 'react-native';

export type StyledComponentsThemeType = {
  layout: {
    screenDimensions: ScaledSize;
    windowDimensions: ScaledSize;
    isDarkMode: boolean;
    smallerDimension: number;
    largerDimension: number;
    isLandScape: boolean;
    pixelDensity: number;
    navBarHeight: number;
  };
};

declare module 'styled-components' {
  interface DefaultTheme extends StyledComponentsThemeType {}
}
