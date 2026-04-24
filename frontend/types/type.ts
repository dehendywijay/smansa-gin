export type MenuItem = {
  title: string;
  href: string;
  subItems?: MenuSubItem[];
};

export type MenuSubItem = {
  title: string;
  href: string;
};

export type News = {
  ID: number;
  title: string;
  thumbnail: string;
  imgUrl: string;
  content: string;
  category: string;
  status: "published" | "draft";
  createdAt: string | Date;
  updatedAt: string | Date;
};
