import React from "react";
import { Post, Tag } from "../../types/postType";
import {
  getAllPosts,
  getAllTags,
  getPostById,
  getTagsByTagName,
  getPostsByTagName,
} from "../../libs/dataFetch";

const Home: React.FC = async () => {
  const postData = await getAllPosts();
  const idPost = await getPostById(postData[0].id);
  const tagData = await getAllTags();
  const tagsData = await getTagsByTagName(["タグテスト1", "タグテスト3"]);
  const postByTagName = await getPostsByTagName(["タグテスト1"]);

  const emptyTagsData = await getTagsByTagName([]);
  const emptyPostByTagName = await getPostsByTagName([]);

  console.log(emptyPostByTagName);
  console.log(emptyTagsData);

  return (
    <div>
      <main>
        <h1 className="font-bold text-5xl">hoge</h1>
        <h2 className="font-bold text-2xl">postとtag一覧</h2>
        <h3 className="font-bold text-xl">post一覧</h3>
        {postData.map((post: Post) => {
          return <p key={post.id}>{post.title}</p>;
        })}
        <h3 className="font-bold text-xl">ポストをIDで呼び出す</h3>
        <p>{idPost.title}</p>
        <h3 className="font-bold text-xl">tagの名前一覧</h3>
        {tagData.map((tag: Tag) => {
          return <p key={tag.id}>{tag.tagName}</p>;
        })}
        <h3 className="font-bold text-xl">
          tagを任意の名前の配列で呼び出す(「タグテスト1」と「タグテスト3」)
        </h3>
        {tagsData.contents.map((tag: Tag) => {
          return <p key={tag.id}>{tag.tagName}</p>;
        })}
        <h3 className="font-bold text-xl">
          postを任意のtagの名前の配列で呼び出す(「タグテスト1」)
        </h3>
        {postByTagName.contents.map((post: Post) => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </main>
    </div>
  );
};

export default Home;
