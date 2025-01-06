import { client } from "./client";
//import { Post,Tag } from "../types/postType";　一旦型は後回し
import { PostType, TagType } from "../types/postType";

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
  target: string | string[];
  condition?: FilterCondition;
};

////////////local function////////////

function makeFilterQuery(queryProps: FilterQuery) {
  //itemが１つ：fieldId[filterType]item0の文字列
  //itemが2つ以上：fieldId[filterType]item0の文字列[condition]fieldId[filterType]item1の文字列...

  if (typeof queryProps.target === "string") {
    return `${queryProps.fieldId}[${queryProps.filterType}]${queryProps.target}`;
  } else {
    const query = queryProps.target
      .map(
        (targetItem) =>
          `${queryProps.fieldId}[${queryProps.filterType}]${targetItem}`
      )
      .join(`[${queryProps.condition}]`);
    return query;
  }
}

////////////get post function////////////

export async function getPostById(id: string) {
  const data = await client.get({
    endpoint: "posts",
    contentId: id,
  });

  return data;
}

export async function getPostBySlug(slug: string) {
  const querySetting: FilterQuery = {
    fieldId: "postUri",
    filterType: "equals",
    target: slug,
    condition: "or",
  };

  const query = makeFilterQuery(querySetting);

  const data = await client.get({
    endpoint: "posts",
    queries: { filters: query },
  });

  return data;
}

export async function getAllPosts(): Promise<PostType[]> {
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
    target: tagIds,
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
  const tagIds: string[] = tags.contents.map((tag: TagType) => {
    return tag.id;
  });

  const postsByTagName = await getPostsByTagId(tagIds);

  return postsByTagName;
}

////////////get tag function////////////

export async function getAllTags(): Promise<TagType[]> {
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
    target: tagNames,
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
