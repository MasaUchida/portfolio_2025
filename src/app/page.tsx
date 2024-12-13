import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

import { getAllPosts } from "../../libs/dataFetch";

const Home: React.FC = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <main className="h-full">
        <div className="flex h-full">
          <div className="w-full h-full py-8 px-6 flex flex-col gap-4 bg-blue-200">
            <div className="h-32 w-full flex justify-center">
              <Image
                src="/main-logo.png"
                width={980}
                height={138}
                alt="Picture of the author"
                className="bg-blue-800"
              ></Image>
            </div>

            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="h-full w-full bg-blue-800 rounded-3xl border-2 border-black flex "
                >
                  <div className="px-10 py-6 flex flex-col">
                    <div className="h-full w-80 flex flex-col items-center flex-grow">
                      <h2 className="text-2xl text-white">{post.title}</h2>
                      <p className="text-sm text-white">
                        {post.projectPeriod
                          ? post.projectPeriod
                          : "ダミー期間だよ"}
                      </p>
                      <p className="text-base text-white">
                        {post.carouselDescription
                          ? post.carouselDescription
                          : "ダミー文ですよ"}
                      </p>
                    </div>
                    <Link
                      href={`/works/${post.postUri}`}
                      className="w-full h-10 px-4 py-2 bg-black text-white text-sm rounded-full"
                    >
                      プロダクトへ
                    </Link>
                  </div>
                  <div>
                    <Image
                      src={
                        post.carouselImage?.url ? post.carouselImage.url : "/#"
                      }
                      alt="hoge"
                      width={512}
                      height={512}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-6 pb-8 px-4 h-full flex flex-col gap-12">
            <Header />
            <div className="flex flex-col items-center space-y-0 flex-grow">
              <div className="flex flex-col items-center gap-8 flex-grow">
                <p>01</p>
                <p>02</p>
                <p>03</p>
                <p>04</p>
                <p>05</p>
                <p>06</p>
              </div>
              <div className="h-20 w-20 bg-gray-500 rounded-full overflow-hidden">
                <Link href={"/about"}>
                  <Image
                    src={"/my-icon.png"}
                    alt="#"
                    width={80}
                    height={80}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
