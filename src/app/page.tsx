import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

import { getAllPosts } from "../../libs/dataFetch";
import Carousel from "../components/Carousel";
import CarouselPagination from "../components/CarouselPagination";

const Home: React.FC = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <main className="h-full">
        <div className="flex h-full">
          <div className="w-full h-full py-8 px-6 bg-blue-600 flex flex-col items-center gap-4">
            <div className="w-full bg-blue-700">
              <Image
                src="/main-logo.png"
                width={980}
                height={138}
                alt="Picture of the author"
                className="m-auto"
              ></Image>
            </div>
            <Carousel slides={posts}></Carousel>
          </div>

          <div className="pt-6 pb-8 px-4 h-full flex flex-col gap-12">
            <Header />
            <div className="flex flex-col items-center space-y-0 flex-grow">
              <div className="flex flex-col items-center gap-8 flex-grow">
                <CarouselPagination />
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
