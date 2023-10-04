import hamburgerMenu from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

function Navbar() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img
            src="/src/assets/images/header-logo.svg"
            alt="logo"
            width={130}
            height={30}
          />
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="font-montserrat text-lg text-slate-gray hover:text-gray-800"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <div className="flex items-center gap-3 max-lg:hidden">
            <button className="bg-black text-white py-2 px-5 rounded-3xl">
              Sign In
            </button>
            <button className="bg-black text-white py-2 px-5 rounded-3xl">
              Explore
            </button>
          </div>
        </ul>
        <div className="hidden items-center cursor-pointer max-lg:flex">
          <img src={hamburgerMenu} alt="menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
