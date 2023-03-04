import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function RequireAuth({ children }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => {
    return {
      user: state.user.user,
    };
  });
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user]);
  return children;
}

export default RequireAuth;
