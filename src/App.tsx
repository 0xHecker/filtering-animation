import { AnimatePresence } from 'framer-motion';
import ButtonFilters from './components/ButtonFilters';
import Movies from './components/Movies';
import MoviesContextProvider from './utils/MoviesContextProvider';

const App = () => {
  return (
    <MoviesContextProvider>
      <div className="app">
        <ButtonFilters />
        <div className="image-container">
          <AnimatePresence>
            <Movies />
          </AnimatePresence>
        </div>
      </div>
    </MoviesContextProvider>
  );
};

export default App;
