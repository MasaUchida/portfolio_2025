import React from "react";
import { client } from "../../libs/client";
import { Post } from "@/type/postType";

const Home: React.FC = async () => {
  const postData = await client.get({ endpoint: "posts" });
  //console.log(postData.contents);

  return (
    <div>
      <main>
        <h1>hoge</h1>
        <h2>中タイトル</h2>
        {postData.contents.map((post: Post) => {
          return <p key={post.id}>{post.id}</p>;
        })}
      </main>
    </div>
  );
};

export default Home;

//<p>id:{postData.contents[0].id}</p>
