import { Route } from 'react-router-dom';
import PostListPage from './pages/post/PostListPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import WritePage from './pages/post/WritePage';
import PostPage from './pages/post/PostPage';
import HomePage from './pages/home/HomePage';
import HeaderTab from './components/common/HeaderTab';

import Responsive from './components/common/Responsive';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import UpdatePostPage from './pages/post/UpdatePostPage';

function App() {
  return (
    <>
      <HeaderTab />
      <Responsive>
        <Route component={HomePage} path="/" exact />
        <Route component={PostListPage} path="/post" exact />
        <Route component={LoginPage} path="/login" exact />
        <Route component={ResetPasswordPage} path="/resetPassword" exact />
        <Route component={RegisterPage} path="/register" exact />
        <Route component={WritePage} path="/write" exact />
        <Route component={PostPage} path="/post/:postId" exact />
        <Route component={UpdatePostPage} path="/post/update/:postId" exact />
      </Responsive>
    </>
  );
}

export default App;
