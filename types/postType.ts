type MicroCmsApiReturnType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type MicroCmsImageType = {
  url: string;
  height: number;
  width: number;
};

export type PostType = MicroCmsApiReturnType & {
  order: number;
  title: string;
  postUri: string;
  postImage?: MicroCmsImageType;
  tags?: TagType[];
  description?: HTMLElement;
  carouselImage?: MicroCmsImageType;
  carouselDescription?: string;
  projectPeriod: string;
};

export type TagType = MicroCmsApiReturnType & {
  tagName: string;
};
