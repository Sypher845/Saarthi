import Reac, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      localStorage.removeItem("token");
      navigate("/login");
    });

  if (isLoading) { 
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
