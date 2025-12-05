export type Movie = {
  id: number;
  title: string;
  originalTitle: string;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  popularity: number;
  adult: boolean;
  video: boolean;
  genreIds: number[];
  originalLanguage: string;
};

export type MovieResponse = {
  page: number;
  results: Movie[];
  totalResults: number;
  totalPages: number;
};
