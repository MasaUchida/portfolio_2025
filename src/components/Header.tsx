import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="h-40 w-40 bg-black rounded-full flex flex-col justify-center items-center">
      <nav className="text-white">
        <Link href={"/"}>Home</Link>
      </nav>
      <nav className="text-white">
        <Link href={"/works"}>Works</Link>
      </nav>
      <nav className="text-white">
        <Link href={"/about"}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
