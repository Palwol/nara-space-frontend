import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import router from './router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default App;
