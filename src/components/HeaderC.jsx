import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/about-me", label: "AboutMe" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/contacts", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-5">
          <NavLink
            to="/"
            end
            className="block w-7 h-7"
            onClick={() => setOpen(false)}
          >
            <div className="w-full h-full bg-[url('/AP_ICON.svg')] rounded-sm bg-no-repeat bg-center bg-contain cursor-pointer" />
          </NavLink>

          <nav className="flex items-center gap-5">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `group flex items-center ${
                    isActive ? "font-medium" : "font-normal"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`transition-transform duration-300 ${
                        isActive ? "-translate-x-2" : ""
                      } group-hover:-translate-x-2`}
                    >
                      _
                    </span>

                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <button className="hidden md:block cursor-pointer border px-3 py-1 bg-[#222222] text-[#f5f5f5] transition-colors duration-300 hover:bg-[#f5f5f5] hover:text-[#222222]">
          _Hire _Me
        </button>

        <div className="flex md:hidden items-center justify-between w-full">
          <NavLink
            to="/"
            end
            className="block w-7 h-7"
            onClick={() => setOpen(false)}
          >
            <div className="w-full h-full bg-[url('/AP_ICON.svg')] rounded-sm bg-no-repeat bg-center bg-contain cursor-pointer" />
          </NavLink>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#222222] transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#222222] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#222222] transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="max-w-5xl mx-auto px-6 pb-5 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `group flex items-center ${
                  isActive ? "font-medium" : "font-normal"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`transition-transform duration-300 ${
                      isActive ? "-translate-x-2" : ""
                    } group-hover:-translate-x-2`}
                  >
                    _
                  </span>

                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}

          <button className="mt-2 cursor-pointer border px-3 py-2 bg-[#222222] text-[#f5f5f5] transition-colors duration-300 hover:bg-[#f5f5f5] hover:text-[#222222]">
            _Hire _Me
          </button>
        </nav>
      </div>
    </header>
  );
}
