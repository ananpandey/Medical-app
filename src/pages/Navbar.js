import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const navLinks = [
  { to: "#", text: "Home", isBold: true },
  { to: "#description", text: "About Us", isBold: false },
  { to: "#multicards", text: "Solutions", isBold: false },
  { to: "#blogs", text: "Blogs", isBold: false },
  { to: "#contact", text: "Contact Us", isBold: false },
];

const Navbar = () => {
  return (
    <div className="flex">
      <div className="w-full h-22 mt-10 py-4 flex justify-between fixed z-10 bg-white text-xl cursor-pointer text-[#0E202A]">
        <div className="flex items-center ml-4 md:ml-7">
          <img className="h-16 md:h-14" src="/logo.svg" alt="card" />
        </div>
        <div className="md:hidden relative">
          <button className="mr-4 mt-4"></button>
        </div>
        <div className={`md:flex items-center space-x-6 hidden`}>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to} smooth>
              <span
                className={`mr-6 ${
                  link.isBold
                    ? "font-extrabold contrast-150 border-b-2 border-[#86a3b3]"
                    : "mr-4,contrast-50"
                }`}
              >
                {link.text}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center md:mr-4">
          <span className="border border-[#9dbdcf] lg:p-4 md:p-3 mr-4 rounded-md contrast-50 text-[#0E202A]">
            Join Healthcare
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
