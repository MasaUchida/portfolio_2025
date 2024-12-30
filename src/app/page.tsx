import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { ColorProvider } from "../context/ColorContext";
import { getAllPosts } from "../../libs/dataFetch";
import Carousel from "../components/Carousel";
import CarouselPagination from "../components/CarouselPagination";
import ContextualBackGround from "../components/ContextualBackGroud";

const Home: React.FC = async () => {
  const posts = await getAllPosts();

  return (
    <main className="h-full">
      <div className="flex h-full">
        <ColorProvider>
          <ContextualBackGround className="w-full h-full py-8 px-6 flex flex-col items-center gap-4">
            <ContextualBackGround className="w-full" colorNumber={700}>
              <Image
                src="/main-logo.png"
                width={980}
                height={138}
                alt="Picture of the author"
                className="m-auto"
              ></Image>
            </ContextualBackGround>
            <Carousel slides={posts}></Carousel>
          </ContextualBackGround>
        </ColorProvider>
        <div className="pt-6 pb-8 px-4 h-full flex flex-col gap-12">
          <Header />
          <div className="flex flex-col items-center space-y-0 flex-grow">
            <div className="flex flex-col items-center gap-8 flex-grow">
              <CarouselPagination />
            </div>
            <div className="h-16 w-16 bg-gray-500 rounded-full overflow-hidden">
              <Link href={"/about"}>
                <Image
                  src={"/my-icon.png"}
                  alt="#"
                  width={64}
                  height={64}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
