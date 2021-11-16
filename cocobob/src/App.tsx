import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/post/PostListPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import WritePage from './pages/post/WritePage';
import PostPage from './pages/post/PostPage';
import ProfilePage from './pages/profile/ProfilePage';


function App() {
  return (
    <>

        <Routes>
          <Route element={<PostListPage />} path={'/@:username/*'} />
          <Route element={<PostListPage />} path={'/*'} />
          <Route element={<LoginPage />} path="/login/*" />
          <Route element={<RegisterPage />} path="/register/*" />
          <Route element={<WritePage />} path="/write/*" />
          <Route element={<PostPage />} path="/@:username/:postId/*" />
          <Route element={<ProfilePage />} path="/profile/*" />
        </Routes>

    </>
  );
}

export default App;
