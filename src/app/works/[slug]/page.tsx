import React from "react";
import { getAllPosts } from "../../../../libs/dataFetch";
import Image from "next/image";
import Card from "../../../components/Card";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Tag from "../../../components/Tag";

type returnParamsValueType = { slug: string };
type paramsType<T> = { params: Promise<T> };

const PostPage = async ({ params }: paramsType<returnParamsValueType>) => {
  const uriString = await params;
  console.log(uriString);

  return (
    <>
      <main>
        <div className="p-10 flex gap-10">
          <div className="w-full flex flex-col gap-6">
            <div className="h-10 border-2 border-black rounded-full">
              Home&gt;works&gt;タイトル
            </div>
            <div className="flex items-center">
              <h1 className="text-4xl font-bold flex-grow">タイトル</h1>
              <p>プロジェクト期間：</p>
              <Tag id="1" tagName="Product" size="large" />
            </div>
            <Image
              src={"/#"}
              alt="#"
              width={920}
              height={460}
              className="bg-gray-300 rounded-3xl"
            />
            <div>
              <p>postの本体だよ</p>
              <p>{`${uriString}`}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10">
            <Header />
            <div className="flex flex-col gap-4">
              <Card id="1" title="サイドカード1" />
              <Card id="1" title="サイドカード2" />
              <Card id="1" title="サイドカード3" />
              <Card id="1" title="サイドカード4" />
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
