import { Link } from "react-router-dom";

export default function InDevelopment() {
  return (
    <section className="bg-[#f5f5f5] text-[#222222] max-w-7xl mx-auto min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <h1 className="mt-8 text-5xl md:text-7xl font-light tracking-tight">
          Under Construction_
        </h1>

        <div className="mt-12">
          <Link
            to="/"
            className="border px-6 py-3 bg-[#222222] text-[#f5f5f5] transition-colors duration-300 hover:bg-[#f5f5f5] hover:text-[#222222]"
          >
            _BackHome
          </Link>
        </div>
      </div>
    </section>
  );
}
