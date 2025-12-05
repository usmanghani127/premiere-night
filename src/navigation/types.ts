import { Movie } from '@services/api/tmdb/types';

export type RootNavigatorParamList = {
  BottomTabs: undefined;
  Search: undefined;
  MovieDetail: { movieId: Movie['id'] };
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
