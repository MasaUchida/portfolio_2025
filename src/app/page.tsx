import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import HomePostCard from "../components/HomePostCard";

import { getAllPosts } from "../../libs/dataFetch";

const Home: React.FC = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <main className="h-full">
        <div className="flex h-full">
          <div className="w-full h-full py-8 px-6 bg-blue-200 flex flex-col items-center gap-4">
            <div className="w-full bg-blue-800">
              <Image
                src="/main-logo.png"
                width={980}
                height={138}
                alt="Picture of the author"
                className="m-auto"
              ></Image>
            </div>

            {posts.map((post) => {
              console.log(post.carouselImage.url);
              return (
                <HomePostCard
                  id={post.id}
                  title={post.title}
                  projectPeriod={post.projectPeriod}
                  tags={post.tags}
                  carouselDescription={post.carouselDescription}
                  carouselImageUrl={post.carouselImage.url}
                  postUri={post.postUri}
                />
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
