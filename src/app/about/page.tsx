import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../../styles/aboutStyle.css";

const AboutPage: React.FC = () => {
  return (
    <main className="h-svh flex flex-col">
      <div className="flex -mb-24">
        <div className="w-full px-10 pt-6 pb-10 rounded-br-3xl border-r-2 border-b-2 border-gray-900 bg-gray-300">
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
        <div className="px-4 pt-6 pb-10">
          <Header />
        </div>
      </div>
      <div className="px-10 pb-20 flex-grow flex flex-col items-center gap-6">
        <div className="pt-6 bg-white rounded-full overflow-hidden inline-block">
          <Image
            src={"/my-icon.png"}
            alt="打田の近影イラスト"
            width={160}
            height={160}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl">打田雅俊</h2>
          <div className="description">
            <h3>自己紹介</h3>
            <p>
              大学から現在までデザイン畑でずっと生活している者です。
              <br />
              大学では美術専門の学部を卒業し、紙・立体のデザインを主に行ってきました。
              <br />
              生産デザイナーとして社会人デビューしたものの、想像以上に新しいことをしない業界でした。
              <br />
              片やどんどん新しい手法や開発を行なっていたUI/UXの世界に転身し、現在に至ります。
              <br />
            </p>
            <h3>経歴</h3>

            <ul>
              <li>
                2010年 4月~2014年
                3月：筑波大学　芸術専門学群　デザイン課　プロダクトデザインコース（卒業）
              </li>
              <li>
                2014年 4月~2016年
                3月：筑波大学大学院　人間総合科学研究課　芸術専攻　プロダクトデザイン（修了）
              </li>
              <li>
                2016年 4月~2019年
                8月：歯科診療台メーカーのインダストリアルデザイナー（3年）
              </li>
              <li>2019年 9月~現在：Web・UI/UXデザイナー</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
