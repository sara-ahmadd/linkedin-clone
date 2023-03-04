import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const location = useLocation();
  const { user } = useSelector((state) => {
    return {
      user: state.user.user,
    };
  });

  if (user) {
    return children;
  } else {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
}

export default RequireAuth;
