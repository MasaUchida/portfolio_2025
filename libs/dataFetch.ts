import { client } from "./client";
//import { Post,Tag } from "../types/postType";　一旦型は後回し
import { Tag } from "../types/postType";

////////////local type////////////

type FilterType =
  | "equals"
  | "not_equals"
  | "contains"
  | "not_contains"
  | "less_than"
  | "greater_than"
  | "exists"
  | "not_exists"
  | "begins_with";

////////////local function////////////

function makeOrFilterQuery(
  fieldId: string,
  filterType: FilterType,
  itmes: string[]
) {
  //入ってきたtagNameの配列の各要素に${fieldId}[${filterType}]を追加し
  //次の要素と[or]の文字列を挟んでjoinする処理
  const query = itmes
    .map((item) => `${fieldId}[${filterType}]${item}`)
    .join("[or]");

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
  if (tagNames.length === 0) return "tagNames is empty";

  const tagNameQuery = makeOrFilterQuery("tagName", "equals", tagNames);

  const data = await client.get({
    endpoint: "tags",
    queries: {
      filters: tagNameQuery,
    },
  });

  return data;
}

export async function getPostsByTagName(tagNames: string[]) {
  if (tagNames.length === 0) return "tagNames is empty";

  const tags = await getTagsByTagName(tagNames);
  const tagIdList: string[] = tags.contents.map((tag: Tag) => {
    return tag.id;
  });

  const query = makeOrFilterQuery("tags", "contains", tagIdList);

  const postByTag = client.get({
    endpoint: "posts",
    queries: { filters: query },
  });

  return postByTag;
}
