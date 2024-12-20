import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AboutPage: React.FC = () => {
  return (
    <main className="h-svh flex flex-col">
      <div className="flex -mb-24">
        <div className="w-full p-10 rounded-br-3xl border-r-2 border-b-2 border-gray-900 bg-gray-300">
          <h1>
            <Image
              src={"/about-title.png"}
              alt=""
              width={408}
              height={120}
              className="mb-16"
            />
          </h1>
        </div>
        <div className="p-10">
          <Header />
        </div>
      </div>
      <div className="px-10 pb-10 flex-grow flex flex-col items-center gap-6">
        <div className="p-6 bg-white rounded-full overflow-hidden inline-block">
          <Image
            src={"/my-icon.png"}
            alt="#"
            width={160}
            height={160}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl">打田雅俊</h2>
          <p>自己紹介のページだよ</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
