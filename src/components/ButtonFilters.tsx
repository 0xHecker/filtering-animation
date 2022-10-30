import { genres } from '../utils/genres';
import { useState } from 'react';
import { useMovieContext } from '../hooks/useMovieContext';
import { MovieContext } from '../utils/MoviesContextProvider';

const ButtonFilters = () => {
  const { popularMovies, filteredMovies, setFilteredMovies }: any =
    useMovieContext(MovieContext);

  const [tabActive, setTabActive] = useState(0);
  const handleClickFilter = (id: number) => {
    setTabActive(id);
    let newlist = [...popularMovies];
    let filtered = newlist.filter((movie) =>
      movie.genre_ids.includes(id)
    );
    if (id === 0) setFilteredMovies(popularMovies);
    else setFilteredMovies(filtered);
  };

  return (
    <div className="button-wrapper">
      {genres.map((item) => {
        return (
          <button
            key={item.id}
            className={tabActive === item.id ? 'active' : undefined}
            onClick={() => handleClickFilter(item.id)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonFilters;
