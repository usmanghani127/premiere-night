import { createSlice } from '@reduxjs/toolkit';
import { Movie, MoviesState } from './types';

const dummyMovies: Movie[] = [
  {
    adult: false,
    backdropPath: '/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg',
    genreIds: [16, 12, 10751, 14, 35],
    id: 502356,
    originalLanguage: 'en',
    originalTitle: 'The Super Mario Bros. Movie',
    overview:
      'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
    popularity: 6572.614,
    posterPath: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
    releaseDate: '2023-04-05',
    title: 'The Super Mario Bros. Movie',
    video: false,
    voteAverage: 7.5,
    voteCount: 1456,
  },
  {
    adult: false,
    backdropPath: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
    genreIds: [28, 12, 878],
    id: 505642,
    originalLanguage: 'en',
    originalTitle: 'Black Panther: Wakanda Forever',
    overview:
      "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death.",
    popularity: 5234.123,
    posterPath: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    releaseDate: '2022-11-09',
    title: 'Black Panther: Wakanda Forever',
    video: false,
    voteAverage: 7.4,
    voteCount: 3201,
  },
  {
    adult: false,
    backdropPath: '/faXT8V80JRhnArTAeYXz0Eutpv9.jpg',
    genreIds: [16, 35, 10751, 14],
    id: 315162,
    originalLanguage: 'en',
    originalTitle: 'Puss in Boots: The Last Wish',
    overview:
      'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
    popularity: 4821.456,
    posterPath: '/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
    releaseDate: '2022-12-07',
    title: 'Puss in Boots: The Last Wish',
    video: false,
    voteAverage: 8.2,
    voteCount: 2891,
  },
  {
    adult: false,
    backdropPath: '/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
    genreIds: [16, 10751, 12, 14, 35],
    id: 508947,
    originalLanguage: 'en',
    originalTitle: 'Turning Red',
    overview:
      'Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.',
    popularity: 4312.789,
    posterPath: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    releaseDate: '2022-03-10',
    title: 'Turning Red',
    video: false,
    voteAverage: 7.3,
    voteCount: 2567,
  },
  {
    adult: false,
    backdropPath: '/askg3SMvhqEl4OL52YuvdtY40Yb.jpg',
    genreIds: [10751, 16, 14, 10749, 35],
    id: 489931,
    originalLanguage: 'en',
    originalTitle: 'Encanto',
    overview:
      'The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto.',
    popularity: 3987.234,
    posterPath: '/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
    releaseDate: '2021-11-24',
    title: 'Encanto',
    video: false,
    voteAverage: 7.6,
    voteCount: 4123,
  },
  {
    adult: false,
    backdropPath: '/cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
    genreIds: [28, 12, 14],
    id: 566525,
    originalLanguage: 'en',
    originalTitle: 'Shang-Chi and the Legend of the Ten Rings',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    popularity: 3654.891,
    posterPath: '/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
    releaseDate: '2021-09-01',
    title: 'Shang-Chi and the Legend of the Ten Rings',
    video: false,
    voteAverage: 7.5,
    voteCount: 5678,
  },
];

const initialState: MoviesState = {
  nowPlaying: dummyMovies.slice(0, 5),
  popular: [...dummyMovies]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 5),
  topRated: [...dummyMovies]
    .sort((a, b) => b.voteAverage - a.voteAverage)
    .slice(0, 5),
  upcoming: dummyMovies.slice(1, 6),
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

export const MoviesReducer = moviesSlice.reducer;

export const MoviesActions = moviesSlice.actions;
