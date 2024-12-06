import React from "react";

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const uriString = (await params).slug;
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

//メモ
//propsには{ params : Promise<T> }の型の値が渡ってくる
//Promiseの中身は{ dynamicRouteName : string }なので型は以下になる
//{ params : Promise<{ dynamicRouteName : string }> }
