"use client";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX, BsLinkedin } from "react-icons/bs";
import { headerMenuLinks } from "./headerMenuLinks";
import { GoLaw } from "react-icons/go";
import { FC, useState } from "react";
import { usePathname } from "next/navigation";

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header className=" z-40 shadow-md sticky top-0 backdrop-blur-xl">
      <nav className="w-full h-24 shadow-lg bg-white/70 ">
        {/* Desktop Menu*/}
        <div className="flex items-center justify-between w-full h-full px-4">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="Gilmore Marine Logo"
              width={205}
              height={100}
            />
          </Link>
          <div className="text-[#36454f] hidden sm:flex">
            <ul className="hidden sm:flex md:flex items-center">
              <li>
                <Link href="/contact">
                  <button className="bg-[#01416A] hover:bg-[#36454f] py-2 px-8 text-white ml-5 ease-in-out duration-300">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className="sm:hidden cursor-pointer pl-24 " onClick={toggleMenu}>
            <BsList className="h-8 w-8 text-[#01416A]" />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[50%] sm:hidden h-screen p-10 ease-in-out bg-[#ecf0f3] duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div className="flex w-full items-center justify-end ">
            <div className="cursor-pointer" onClick={toggleMenu}>
              <BsX className="h-8 w-8 text-[#01416A]" />
            </div>
          </div>
          {/* Mobile Menu Links */}
          <div className="flex flex-col py-4 text-[#36454f]">
            <ul>
              {headerMenuLinks.map((link, i) => (
                <li
                  onClick={() => setMenuOpen(false)}
                  key={i}
                  className="py-2 px-3 hover:underline hover:decoration-[#01416A] hover:text-[#01416A]"
                >
                  <Link href={`/${link.linkPath}`}>{link.linkName}</Link>
                </li>
              ))}
              <li>
                <button className="shadow-xl hover:bg-[#36454f] bg-[#01416A] text-white w-50 py-2 px-3 mt-5 ease-in-out duration-300">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="flex justify-center mt-20">
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Gilmore Marine Logo"
                width={205}
                height={100}
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
