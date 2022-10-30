import { motion } from 'framer-motion';
import { useMovieContext } from '../hooks/useMovieContext';
import { MovieContext } from '../utils/MoviesContextProvider';

const Movies = () => {
  const { filteredMovies }: any = useMovieContext(MovieContext);
  const baseImageURL = `https://image.tmdb.org/t/p/w500/`;

  return filteredMovies.map((movie: any, idx: number) => {
    return (
      <motion.div
        className="image-card"
        layout
        key={movie.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          alt={`${movie.title}`}
          src={`${baseImageURL}${movie.backdrop_path}`}
        />
        <h2>{movie.title}</h2>
      </motion.div>
    );
  });
};

export default Movies;
