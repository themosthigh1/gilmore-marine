import Photo1 from "../../../../../public/images/photo-1.jpg";
import Photo2 from "../../../../../public/images/photo-2.jpg";
import Photo3 from "../../../../../public/images/photo-3.jpg";
import NationalAwardPhoto from "../../../../../public/images/national-award-2.jpg";
import Image from "next/image";

const OnboardServicesPage = () => {
  const photos = [Photo1, Photo2, Photo3];
  return (
    <div>
      <div className=" mb-10">
        <h1 className="text-2xl mb-10">FACTORY-CERTIFIED</h1>
        <span>
          <b>Precision. Quality. Trust.</b> At Gilmore Marine, we know how
          important your boat is to you. Whether you are boating with the family
          or fishing the tournaments, you deserve quick, quality service. From
          routine maintenance to complete re-powering, our certified technicians
          can service and repair most boats, outboards or marine products. We
          continually educate our service technicians to provide you with the
          best service at a reasonable price.
        </span>
      </div>
      <div className="flex justify-between mb-10">
        {photos.map((photo) => (
          <>
            <div>
              <Image
                src={photo}
                alt="Public Images"
                style={{ width: "300px" }}
              />
            </div>
          </>
        ))}
      </div>
      <div className="bg-black text-white justify-center flex py-[8vh] bg-opacity-75">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl">
            NATIONALLY RECOGNIZED SERVICE
          </h1>
          <p>Service Center: (336) 349-9209</p>
        </div>
      </div>
      <div className="flex justify-center -m-10 mb-10">
        <Image
          src={NationalAwardPhoto}
          alt="National Award"
          style={{ width: "300px" }}
        />
      </div>
    </div>
  );
};

export default OnboardServicesPage;
