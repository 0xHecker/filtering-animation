import { useContext } from 'react';
import { MovieContext } from '../utils/MoviesContextProvider';

export const useMovieContext = ({ props }: any) => {
  // @ts-ignore
  const { popularMovies, filteredMovies, setFilteredMovies } =
    useContext(MovieContext);

  if (!popularMovies) {
    throw new Error('Error something went wrong!');
  }

  return { popularMovies, filteredMovies, setFilteredMovies };
};
