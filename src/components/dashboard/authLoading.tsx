import Logo from "../../assets/flowva-logo.png"

export const AuthLoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all">
      <div className="flex flex-col">
        <div className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />

        {/* Scaling Logo */}
        <div className="relative animate-breathe">
          <img
            src={Logo}
            alt="Flowva Logo"
            className="w-24 h-24 object-contain"
          />
          <div className="absolute inset-0 bg-purple-400/20 blur-xl -z-10 rounded-full" />


        </div>
        <p className="mt-4 text-black font-semibold tracking-widest text-xs uppercase animate-pulse">
          Authenticating...
        </p>
      </div>
    </div>
  );
};