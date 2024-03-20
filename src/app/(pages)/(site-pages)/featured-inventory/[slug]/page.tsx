import { getAllBoats } from "@/libs/getAllBoats";
import Image from "next/image";
import { urlForImage } from "../../../../../../sanity/lib/image";

const BoatDetaiPage = async (props: { params: { slug: string } }) => {
  const boats = await getAllBoats();
  const {
    params: { slug },
  } = props;
  console.log(boats);
  return (
    <>
      {boats.map((boat, i) => (
        <div key={i}>
          <div>{boat.model}</div>
          <div>{boat.details}</div>
        </div>
      ))}
    </>
  );
};

export default BoatDetaiPage;
