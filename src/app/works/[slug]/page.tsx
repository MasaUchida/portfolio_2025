import React from "react";
import { getAllPosts } from "../../../../libs/dataFetch";

type returnParamsValueType = { slug: string };
type paramsType<T> = { params: Promise<T> };

const PostPage = async ({ params }: paramsType<returnParamsValueType>) => {
  const uriString = await params;
  console.log(uriString);

  return (
    <>
      <main>
        <p>postページだよ</p>
        <p>{`${uriString}`}</p>
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
