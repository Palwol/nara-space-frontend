import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import router from './router';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import { getUsersThunk } from './store/users-actions';
import { RootState } from './store/store';
import { useEffect } from 'react';

const App = () => {
  const usersData = useAppSelector((state: RootState) => state.users.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (usersData.length) return;
    dispatch(getUsersThunk());
  }, [dispatch, usersData]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default App;
