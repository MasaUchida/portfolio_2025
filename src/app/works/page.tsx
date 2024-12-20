import React from "react";
import Card from "../../components/Card";
import Image from "next/image";
import Tag from "../../components/Tag";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { getAllPosts, getAllTags } from "../../../libs/dataFetch";
import { TagType } from "../../../types/postType";
import Link from "next/link";

const WorksPage: React.FC = async () => {
  const posts = await getAllPosts();
  const tags = await getAllTags();

  return (
    <>
      <main>
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
                  <Tag
                    key={tag.id}
                    id={tag.id}
                    tagName={tag.tagName}
                    size="large"
                  ></Tag>
                );
              })}
            </div>
          </div>
          <div className="p-10">
            <Header />
          </div>
        </div>
        <div className="px-10 pb-10 flex gap-12 flex-wrap justify-center">
          {posts.map((post) => {
            const postTags = post.tags?.map((tag: TagType) => {
              return tag.tagName;
            });

            return (
              <Link href={`/works/${post.postUri}`} key={post.id}>
                <Card
                  id={post.id}
                  title={post.title}
                  projectPeriod={post.projectPeriod}
                  tagNames={postTags}
                  imageUrl={post.postImage?.url}
                ></Card>
              </Link>
            );
          })}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default WorksPage;
