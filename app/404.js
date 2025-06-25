// pages/404.jsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl sm:text-9xl font-extrabold text-white tracking-tight">404</h1>
        <p className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-300">Page not found</p>
        <p className="mt-2 text-base sm:text-lg text-gray-500">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-white text-black px-5 py-3 text-sm font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
