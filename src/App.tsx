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
  const { data, isLoading, error } = useAppSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data.length) return;
    dispatch(getUsersThunk());
  }, [dispatch, data]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isLoading && <div>Loading...</div>}
      {error && <div>{`${error?.code} Error Ocurred`}</div>}
      {!isLoading && !error && <RouterProvider router={router} />}
    </ThemeProvider>
  );
};
export default App;
