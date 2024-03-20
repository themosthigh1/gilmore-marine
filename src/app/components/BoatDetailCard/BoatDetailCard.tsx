import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { Boat } from "@/models/boat";

const BoatDetailCard = (props: Boat) => {
  const { model, description, slug, images, details, price, imageUrl } = props;
  console.log(props);
  return (
    <div>
      <div className="flex flex-row">
        <div className="">
          <Link href={`/featured-inventory/${slug.current}`}>
            <Image src={imageUrl} alt={model} height={300} width={250} />
          </Link>
          <p className="font-semibold text-lg mt-5">{model}</p>
          <p className="text-bold">Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BoatDetailCard;
