import React from "react";
import { getAllPosts, getPostBySlug } from "../../../../libs/dataFetch";
import Image from "next/image";
import Link from "next/link";
import Card from "../../../components/Card";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Tag from "../../../components/Tag";
import { TagType } from "../../../../types/postType";

import "../../../../styles/postStyle.css";

type returnParamsValueType = { slug: string };
type paramsType<T> = { params: Promise<T> };
type TargetTagType = { tagName: string; tagId: string };

const PostPage = async ({ params }: paramsType<returnParamsValueType>) => {
  const uriString = await params;
  const sideCardPosts = await getAllPosts();
  const targetPost = await getPostBySlug(uriString.slug);
  const postContents = targetPost.contents[0];
  const targetTagObjects = postContents.tags.map((tag: TagType) => {
    return { tagName: tag.tagName, tagId: tag.id };
  });

  return (
    <>
      <main>
        <div className="px-10 pt-10 pb-20  ">
          <div className="m-auto flex max-w-[1280px]">
            <div className="flex flex-col gap-6 max-w-[calc(100%_-_22.5rem)]">
              <div className="px-4 h-10 border-2 border-gray-900 rounded-full leading-10">
                <Link href={"/"}>Home</Link>
                <span> &gt; </span>
                <Link href={"/works"}>Works</Link>
                <span> &gt; </span>
                <span>{`${postContents.title}`}</span>
              </div>
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold flex-grow">{`${postContents.title}`}</h1>
                <p>プロジェクト期間：{`${postContents.projectPeriod}`}</p>
                {targetTagObjects.map((tag: TargetTagType) => {
                  return (
                    <Tag
                      key={tag.tagId}
                      id={tag.tagId}
                      tagName={`${tag.tagName}`}
                      size="large"
                    />
                  );
                })}
              </div>
              <Image
                src={`${
                  postContents.postImage
                    ? postContents.postImage.url
                    : "/test.png"
                }`}
                alt="#"
                width={960}
                height={480}
                className="bg-gray-300 rounded-3xl border-2 border-gray-900"
              />
              <div
                className="post-discription"
                dangerouslySetInnerHTML={{ __html: postContents.description }}
              ></div>
            </div>
            <div className="ml-10 w-80 flex flex-col items-center gap-10">
              <Header />
              <div className="flex flex-col gap-4">
                {sideCardPosts
                  .filter((post) => {
                    return post.postUri !== uriString.slug;
                  })
                  .sort((a, b) => {
                    return a.order - b.order;
                  })
                  .map((post) => {
                    return (
                      <Link href={`/works/${post.postUri}`} key={`${post.id}`}>
                        <Card
                          id={`${post.id}`}
                          title={`${post.title}`}
                          imageUrl={`${
                            post.postImage ? post.postImage.url : ""
                          }`}
                          projectPeriod={`${post.projectPeriod}`}
                          tagNames={post.tags?.map(
                            (tag: TagType) => tag.tagName
                          )}
                          description=" "
                        />
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default PostPage;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const postURIs = posts.map((post) => {
    return { slug: post.postUri };
  });

  return postURIs;
}
