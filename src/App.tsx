import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authorization from 'pages/Authorization';
import Profile from 'pages/Profile';
import { Header } from 'components/layout';
import { RequireAuth } from 'hoc';
import 'assets/styles/main.scss';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Authorization />} />
            <Route
              path='profile'
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path=''
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
