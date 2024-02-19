import { MdLogout } from 'react-icons/md';
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const Logout = () => {
  const { authUser, setAuthUser } = useAuthContext();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { credentials: 'include' });
      const data = await res.json();
      console.log(data);
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <img
        src={authUser?.avatarUrl}
        className="w-10 h-10 border border-gray-800 rounded-full"
      />

      <div
        className="flex items-center p-2 mt-auto border border-gray-800 rounded-lg cursor-pointer bg-glass"
        onClick={handleLogout}>
        <MdLogout size={22} />
      </div>
    </>
  );
};

export default Logout;
