import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="min-h-dvh flex justify-center py-5 px-3 items-center bg-linear-to-br from-[#9013fe] to-[#6D28D9]">
      <div className="flex justify-center w-full max-w-105">
        <div className="w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] py-7.5 px-5 lg:p-10 bg-white rounded-[10px] animate-fadeIn h-fit">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
