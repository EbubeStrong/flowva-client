import { Route, Routes } from "react-router-dom"
import CheckAuth from "./components/common/check-auth"
import DashboardLayout from "./pages/dashboard/layout"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import ForgotPassword from "./pages/auth/forgot-password"
import NotFound from "./pages/not-found/not-found"
import LibraryDashboard from "./pages/dashboard/library"
import DiscoverDashboard from "./pages/dashboard/discover"
import HomeDashboard from "./pages/dashboard/home"
import TechStackDashboard from "./pages/dashboard/tech-stack"
import SubscriptionDashboard from "./pages/dashboard/subscriptions"
import RewardsDashboard from "./pages/dashboard/rewards"
import AccountSettingDashboard from "./pages/dashboard/settings"
import "./App.css"

function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={false}
            >{null}</CheckAuth>
          }
        />

        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={true}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="signin" element={<AuthLogin />} />
          <Route path="signup" element={<AuthRegister />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route path="/dashboard" element={<CheckAuth isAuthenticated={true}><DashboardLayout /></CheckAuth>}>
          <Route index element={<HomeDashboard/>} />
          <Route path="discover" element={<DiscoverDashboard/>} />
          <Route path="library" element={<LibraryDashboard />} />
          <Route path="tech-stack" element={<TechStackDashboard/>} />
          <Route path="subscriptions" element={<SubscriptionDashboard/>} />
          <Route path="earn-rewards" element={<RewardsDashboard/>} />
          <Route path="account-settings" element={<AccountSettingDashboard/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
