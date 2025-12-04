export type RootNavigatorParamList = {
  BottomTabs: undefined;
  Search: undefined;
};

export type BottomTabNavigatorParamList = {
  Spotlight: undefined;
  Watchlist: undefined;
};

export type AppNavigatorProps = RootNavigatorParamList &
  BottomTabNavigatorParamList;

export enum RouteKeys {
  Spotlight = 'Spotlight',
  Watchlist = 'Watchlist',
  Search = 'Search',
}
