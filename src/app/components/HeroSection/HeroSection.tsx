import Image from "next/image";
import HeroImage from "../../../../public/images/HeroImage.jpeg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-screen h-3/5 relative ">
      <div className="w-full">
        <Image src={HeroImage} alt={""} layout="fill" objectFit="cover" />
      </div>
      <div className="relative py-24">
        <div className="text-white container mx-auto px-10 my-auto">
          <div className="bg-black bg-opacity-70 p-10 text-center justify-center flex flex-col items-center">
            <h1 className="text-4xl">
              A Boat for Every Family and Every Angler
            </h1>
            <p className="mt-5">
              North Carolinas Full Service Outboard and Marine Dealer
            </p>
            <div className="mt-5 z-20">
              <Link href={"/outboard-services"}>
                <button className="bg-[#01416A] py-2 px-3 mr-5">
                  Outboard Service
                </button>
              </Link>
              <Link href={"featured-inventory"}>
                <button className="bg-[#01416A] py-2 px-3">
                  Featured Inventory
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
