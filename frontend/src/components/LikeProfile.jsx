import { FaHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const LikeProfile = ({ userProfile }) => {
  const { authUser } = useAuthContext();

  const isOwnProfile = authUser?.username === userProfile.login;

  const handleLikeProfile = async () => {
    try {
      const res = await fetch(`/api/users/like/${userProfile.login}`, {
        method: 'POST',
        credentials: 'include',
      });
      const data = await res.json();

      if (data.error) throw new Error(data.error);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!authUser || isOwnProfile) return null;

  return (
    <button
      className="flex items-center w-full gap-2 p-2 text-xs font-medium border border-blue-400 rounded-md bg-glass"
      onClick={handleLikeProfile}>
      <FaHeart size={16} /> Like Profile
    </button>
  );
};
export default LikeProfile;
