import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/main/Main';
import User from './pages/user/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/user',
    element: <User />,
  },
]);

export default router;
