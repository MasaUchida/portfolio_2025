import React from "react";
import Link from "next/link";
import { TagType } from "../../types/postType";
import Image from "next/image";
import Tag from "../components/Tag";

type HomePostCardType = {
  id: string;
  title: string;
  projectPeriod?: string;
  tags?: TagType[];
  carouselDescription?: string;
  carouselImageUrl?: string;
  postUri: string;
};

const HomePostCard: React.FC<HomePostCardType> = (props) => {
  return (
    <div
      key={props.id}
      className="h-full w-full bg-blue-800 rounded-3xl border-2 border-black flex items-center overflow-hidden"
    >
      <div className="h-full w-1/3 px-10 py-16 flex flex-col">
        <div className="h-full flex-grow">
          <h2 className="text-2xl font-bold text-white">{props.title}</h2>
          <p className="mb-2 text-sm text-white">
            {props.projectPeriod
              ? "プロジェクト期間：" + props.projectPeriod
              : "ダミー期間だよ"}
          </p>
          <div className="mb-8">
            {props.tags?.map((tag) => {
              return (
                <Tag key={tag.id} id={tag.id} tagName={`${tag.tagName}`} />
              );
            })}
          </div>
          <p className="text-s font-bold leading-relaxed text-white">
            {props.carouselDescription
              ? props.carouselDescription
              : "ダミー文ですよ"}
          </p>
        </div>
        <Link
          href={`/works/${props.postUri}`}
          className="w-full h-10 px-4 py-2 bg-black text-white text-center text-sm font-bold rounded-full"
        >
          プロダクトへ
        </Link>
      </div>
      <div className="w-2/3 relative">
        <Image
          src={props.carouselImageUrl ? props.carouselImageUrl : "/my-icon"}
          alt="hoge"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default HomePostCard;
