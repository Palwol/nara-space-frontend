import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/main/Main';
import UserId from './pages/user-id/UserId';
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
  {
    path: '/user/:userId',
    element: <UserId />,
  },
]);

export default router;
