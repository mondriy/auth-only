import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>();
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);

  return { isAuth };
};
