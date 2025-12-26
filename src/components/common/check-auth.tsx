// components/auth/check-auth.tsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../providers/useAuth"; 
import { AuthLoadingScreen } from "../dashboard/authLoading";

interface CheckAuthProps {
  children: React.ReactNode;
}

export default function CheckAuth({ children }: CheckAuthProps) {
  const { session, loading } = useAuth();
  const location = useLocation();

  // 1. While checking Supabase session, show the scaling logo loading screen
  if (loading) {
    return <AuthLoadingScreen />;
  }

  // 2. If NOT logged in and trying to access dashboard routes -> Redirect to signin
  if (!session && location.pathname.includes("/dashboard")) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  // 3. If IS logged in and trying to access auth routes (login/signup) -> Redirect to dashboard
  if (session && location.pathname.includes("/auth")) {
    return <Navigate to="/dashboard" replace />;
  }

  // 4. Otherwise, allow access
  return <>{children}</>;
}