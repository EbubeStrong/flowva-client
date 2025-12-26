import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-slate-700">
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="mb-6 text-center max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/auth/signin"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold shadow hover:bg-purple-700 transition"
      >
        Go to Login Page
      </Link>
    </div>
  );
}

export default NotFound;