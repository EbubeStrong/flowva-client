import { Navigate, useLocation } from "react-router-dom";

interface CheckAuthProps {
    isAuthenticated: boolean;
    children: React.ReactNode;
}

function CheckAuth({ isAuthenticated, children }: CheckAuthProps) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/signin" />;
    } else {
      return <Navigate to="/dashboard" />;
    }
  }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/auth/signin") ||
      location.pathname.includes("/auth/signup") ||
      location.pathname.includes("/auth/forgot-password")
    )
  ) {
    return <Navigate to="/auth/signin" />;
  }

  return <>{children}</>;
}

export default CheckAuth;