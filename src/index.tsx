import App from './App';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/fonts.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
