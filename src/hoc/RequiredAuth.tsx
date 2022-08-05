import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

type RequireAuthType = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: RequireAuthType): JSX.Element => {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (!isAuth && isAuth !== undefined) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};
