export type RootNavigatorParamList = {
  BottomTabs: undefined;
};

export type BottomTabNavigatorParamList = {
  Landing: undefined;
  Home: undefined;
};

export type AppNavigatorProps = RootNavigatorParamList &
  BottomTabNavigatorParamList;

export enum RouteKeys {
  LANDING = 'Landing',
  HOME = 'Home',
}
