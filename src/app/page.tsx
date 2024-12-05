import React from "react";
import { Post, Tag } from "../../types/postType";
import { getAllPosts, getAllTags } from "../../libs/dataFetch";

const Home: React.FC = async () => {
  const postData = await getAllPosts();
  const tagData = await getAllTags();

  return (
    <div>
      <main>
        <h1>hoge</h1>
        <h2>中タイトル</h2>
        {postData.map((post: Post) => {
          return <p key={post.id}>{post.id}</p>;
        })}
        {tagData.map((tag: Tag) => {
          return <p key={tag.tagName}>{tag.tagName}</p>;
        })}
      </main>
    </div>
  );
};

export default Home;
