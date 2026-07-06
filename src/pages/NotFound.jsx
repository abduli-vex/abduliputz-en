import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-[8rem] font-bold leading-none">404</h1>

      <div className="text-center">
        <p className="text-2xl font-medium">Page not found.</p>
      </div>

      <Link
        to="/"
        className="border px-6 py-3 bg-[#222222] text-[#f5f5f5] transition-colors duration-300 hover:bg-[#f5f5f5] hover:text-[#222222]"
      >
        _BackHome
      </Link>
    </section>
  );
}
