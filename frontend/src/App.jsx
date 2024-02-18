import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Sidebar from './components/Sidebar';

// import { useAuthContext } from './context/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ExplorePage from './pages/ExplorePage';
import LikesPage from './pages/LikesPage';

const App = () => {
  // const { authUser, loading } = useAuthContext();
  // console.log('Authenticated user:', authUser);

  // if (loading) return null;

  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
};

export default App;
