import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="h-40 w-40 bg-gray-900 text-white-0 rounded-full flex flex-col justify-center items-center">
      <nav>
        <Link href={"/"}>Home</Link>
      </nav>
      <nav>
        <Link href={"/works"}>Works</Link>
      </nav>
      <nav>
        <Link href={"/about"}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
