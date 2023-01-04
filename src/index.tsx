import App from './App';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
