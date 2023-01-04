import App from './App';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
