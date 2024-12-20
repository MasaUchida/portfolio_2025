import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="px-20 py-10 flex gap-20 border-t-2 border-gray-900 bg-gray-100">
      <div>
        <h3 className="font-bold text-lg">サイトマップ</h3>
        <div className="pt-6 flex flex-col gap-3">
          <Link href={"/"} className="text-sm underline">
            Home
          </Link>
          <Link href={"/works"} className="text-sm underline">
            Works
          </Link>
          <Link href={"/about"} className="text-sm underline">
            About
          </Link>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg">関連メディア</h3>
        <div className="pt-6 flex flex-col gap-3">
          <Link
            href={"https://uchida-design.vercel.app/"}
            className="text-sm underline"
          >
            旧ポートフォリオ
          </Link>
          <Link
            href={"https://x.com/uchi__design"}
            className="text-sm underline"
          >
            X
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
