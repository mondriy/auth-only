import { useState, useEffect, useMemo, useCallback } from 'react';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>();

  const user = useMemo(() => {
    return localStorage.getItem('user') || sessionStorage.getItem('user');
  }, []);

  const outAuth = useCallback(() => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  }, []);

  const inAuth = useCallback((remindMe: boolean, user: string) => {
    remindMe
      ? localStorage.setItem('user', user.replaceAll('"', ''))
      : sessionStorage.setItem('user', user.replaceAll('"', ''));
  }, []);

  useEffect(() => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);

  return { isAuth, inAuth, outAuth, user };
};
