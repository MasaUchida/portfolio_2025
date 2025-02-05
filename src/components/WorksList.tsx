"use client";

import React from "react";
import Card from "../components/Card";
import Link from "next/link";
import { PostType, TagType } from "../../types/postType";
import { useFilterIdContext } from "../context/FilterContext";

type PropsType = {
  posts: PostType[];
};

const WorksList: React.FC<PropsType> = (props) => {
  const { filterId } = useFilterIdContext();

  const displayedPosts = filterId
    ? props.posts
        .filter((post) => {
          return post.tags?.some((tag: TagType) => {
            return filterId === tag.id;
          });
        })
        .sort((a, b) => {
          return a.order - b.order;
        })
    : props.posts.sort((a, b) => {
        return a.order - b.order;
      });

  return (
    <>
      {displayedPosts?.map((post) => {
        const postTags = post.tags?.map((tag: TagType) => {
          return tag.tagName;
        });

        return (
          <Link href={`/works/${post.postUri}`} key={post.id}>
            <Card
              id={post.id}
              title={post.title}
              projectPeriod={post.projectPeriod}
              tagNames={postTags}
              imageUrl={post.postImage?.url}
              description={post.carouselDescription}
            ></Card>
          </Link>
        );
      })}
    </>
  );
};

export default WorksList;
