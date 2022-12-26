// import { SearchBox } from 'components/SearchBox/SearchBox';
import { lazy } from 'react';

const SearchBox = lazy(() => import('../components/SearchBox/SearchBox'));


const Movies = () => {
  return (
    <div>
      <SearchBox />
    </div>
  );
};

export default Movies;
