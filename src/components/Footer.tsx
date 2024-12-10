import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-black bg-gray-100">
      <div>
        <h3>サイトマップ</h3>
        <Link href={"/"}>Home</Link>
        <Link href={"/works"}>Works</Link>
        <Link href={"/about"}>About</Link>
      </div>
      <div>
        <h3>関連メディア</h3>
        <Link href={"https://uchida-design.vercel.app/"}>旧ポートフォリオ</Link>
        <Link href={"https://x.com/uchi__design"}>X</Link>
      </div>
    </footer>
  );
};

export default Footer;
