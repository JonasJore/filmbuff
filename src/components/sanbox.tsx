import React from 'react';
import { MovieCard } from '../containers/movieCard';

//export type MovieType = {
//   Poster: string;
//   Title: string;
//   Type: string;
//   Year: string;
//   imdbID: string;
// }


export const Sandbox = (): JSX.Element => {
  return (
    <MovieCard
      movie={{
        Title: "Kill Bill: VOL. I",
        Poster: "N/A",
        Year: "2020",
        imdbID: "dfsdsffd"
      }}
    />
  );
};