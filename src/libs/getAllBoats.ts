import { Boat } from "@/models/boat";
import { client } from "../../sanity/lib/client";

export const getAllBoats = async (): Promise<Boat[]> => {
  const query = `*[_type == 'boat'] {..., "imageUrl": image.asset->url}`;
  const boats: Boat[] = await client.fetch(query, { revalidate: 60 });

  return boats;
};
