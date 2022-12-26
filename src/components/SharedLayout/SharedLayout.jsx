import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
