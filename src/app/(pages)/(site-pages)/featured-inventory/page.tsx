import { getAllBoats } from "@/libs/getAllBoats";
import BoatDetailCard from "@/app/components/BoatDetailCard/BoatDetailCard";
import { Boat } from "@/models/boat";

const FeaturedInventoryPage = async () => {
  const data = await getAllBoats();

  return (
    <>
      <div>
        <p className="mb-10">
          Finding you the best deal for your money, meeting your boating
          requirements, and ensuring your satisfaction is what we are all about.
          Gilmore Marine is ready to help with your quality pre-owned boat
          purchase. Visit our website often to view our latest used boat
          inventory!
        </p>
      </div>
      <div className="flex flex-row">
        {data.map((boat) => (
          <>
            <div className="basis-3/4">
              <BoatDetailCard {...boat} key={boat.key} />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FeaturedInventoryPage;
