import React from "react";
import Image from "next/image";
import FilterTag from "../../components/FilterTag";
import WorksList from "../../components/WorksList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FilterIdProvider } from "../../context/FilterContext";

import { getAllPosts, getAllTags } from "../../../libs/dataFetch";

const WorksPage: React.FC = async () => {
  const posts = await getAllPosts();
  const tags = await getAllTags();

  return (
    <>
      <main>
        <FilterIdProvider>
          <div className="-mb-20 flex">
            <div className="p-10 w-full h-80 bg-gray-300 border-b-2 border-r-2 border-gray-900 rounded-br-3xl">
              <div className="mb-6">
                <Image
                  src={"/works-title.png"}
                  alt="#"
                  width={448}
                  height={112}
                ></Image>
              </div>
              <div className="flex gap-6 items-center">
                <span className="font-bold">フィルタ</span>
                {tags.map((tag) => {
                  return (
                    <FilterTag
                      key={tag.id}
                      id={tag.id}
                      tagName={tag.tagName}
                      size="large"
                    />
                  );
                })}
              </div>
            </div>
            <div className="p-10">
              <Header />
            </div>
          </div>
          <div className="px-10 pb-10 flex gap-12 flex-wrap justify-center">
            <WorksList posts={posts} />
          </div>
          <Footer />
        </FilterIdProvider>
      </main>
    </>
  );
};

export default WorksPage;
