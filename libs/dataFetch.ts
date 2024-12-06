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

type FilterCondition = "and" | "or";

type FilterQuery = {
  fieldId: string;
  filterType: FilterType;
  itmes: string[];
  condition: FilterCondition;
};

////////////local function////////////

function makeFilterQuery(queryProps: FilterQuery) {
  //itemが１つ：fieldId[filterType]item0の文字列
  //itemが2つ以上：fieldId[filterType]item0の文字列[condition]fieldId[filterType]item1の文字列...

  const query = queryProps.itmes
    .map((item) => `${queryProps.fieldId}[${queryProps.filterType}]${item}`)
    .join(`[${queryProps.condition}]`);

  return query;
}

////////////get post function////////////

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

export async function getPostsByTagId(tagIds: string[]) {
  if (tagIds.length === 0) return "tagIds is empty";

  const querySetting: FilterQuery = {
    fieldId: "tags",
    filterType: "contains",
    itmes: tagIds,
    condition: "or",
  };

  const query = makeFilterQuery(querySetting);

  const postsByTagId = client.get({
    endpoint: "posts",
    queries: { filters: query },
  });

  return postsByTagId;
}

export async function getPostsByTagName(tagNames: string[]) {
  if (tagNames.length === 0) return "tagNames is empty";

  const tags = await getTagsByTagName(tagNames);
  const tagIds: string[] = tags.contents.map((tag: Tag) => {
    return tag.id;
  });

  const postsByTagName = await getPostsByTagId(tagIds);

  return postsByTagName;
}

////////////get tag function////////////

export async function getAllTags() {
  const data = await client.getAllContents({
    endpoint: "tags",
  });

  return data;
}

export async function getTagsByTagName(tagNames: string[]) {
  if (tagNames.length === 0) return "tagNames is empty";

  const querySetting: FilterQuery = {
    fieldId: "tagName",
    filterType: "equals",
    itmes: tagNames,
    condition: "or",
  };

  const tagNameQuery = makeFilterQuery(querySetting);

  const data = await client.get({
    endpoint: "tags",
    queries: {
      filters: tagNameQuery,
    },
  });

  return data;
}
