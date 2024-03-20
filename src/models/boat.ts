import { BlockAnnotationDefinition, Image, Reference, Slug } from "sanity";

interface Base {
  _type: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
}

export interface Boat extends Base {
  description: BlockAnnotationDefinition[];
  imageUrl: string;
  details: string;
  slug: { current: string };
  model: string;
  activeStatus: boolean;
  newCondition: boolean;
  key: number;
  price: number;
  images: { _key: string; url: string };
}
