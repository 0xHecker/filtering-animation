import { createContext, useEffect, useState } from 'react';

interface Context {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  poster_path: string;
}
// @ts-ignore
export const MovieContext = createContext({});

const MoviesContextProvider = ({ children }: any) => {
  const [popularMovies, setPopularMovies] = useState<Context[]>([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;

  const fetchPopularMovies = async () => {
    const response = await fetch(apiUrl);
    const res = await response.json();
    setPopularMovies(res.results);
    setFilteredMovies(res.results);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const value = { popularMovies, filteredMovies, setFilteredMovies };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};

export default MoviesContextProvider;
