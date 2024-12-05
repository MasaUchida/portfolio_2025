import { client } from "./client";
//import { Post,Tag } from "../types/postType";　一旦型は後回し

////////////local function////////////

function makeOrFilterQuery(itmes: string[]) {
  //入ってきたtagNameの配列の各要素にtagName[equals]を追加し
  //次の要素と[or]の文字列を挟んでjoinする処理
  const query = itmes.map((item) => `tagName[equals]${item}`).join("[or]");

  return query;
}

////////////global function////////////

export async function getPostById(id: string) {
  const data = await client.get({
    endpoint: "posts",
    contentId: id,
  });

  return data;
}

export async function getAllPosts() {
  const data = await client.getAllContents({
    endpoint: "posts",
  });

  return data;
}

export async function getAllTags() {
  const data = await client.getAllContents({
    endpoint: "tags",
  });

  return data;
}

export async function getTagsByTagName(tagNames: string[]) {
  if (tagNames.length === 0) return "";

  const tagNameQuery = makeOrFilterQuery(tagNames);

  const data = await client.get({
    endpoint: "tags",
    queries: {
      filters: tagNameQuery,
    },
  });

  return data;
}

//export async function getPostsByTag(tagNames: string[]) {
//  //tagNameが入ってきて、タグのIDを取得し、そのIDでPostsに連絡をかける
//  const tags = getTagsByTagName(tagNames);
//  const tagIdList = tags
//    .then((res) => {
//      return res.join();
//    })
//    .catch((e) => {
//      console.log(e);
//    });
//
//  await client.get({
//    endpoint: "posts",
//    //queries:{filters:}
//  });
//}
