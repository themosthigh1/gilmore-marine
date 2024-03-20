import Link from "next/link";
import Image from "next/image";
import Lowe from "../../../../public/images/lw_Lowe_Logo.webp";
import Mercury from "../../../../public/images/mercury.webp";
import Yahama from "../../../../public/images/yamaha.png";

const Footer = () => {
  const brands = [
    { brand: "Lowe", image: `${Lowe}` },
    { brand: "Yahama", image: `${Yahama}` },
    { brand: "Mercury", image: `${Mercury}` },
  ];
  return (
    <div className="w-full h-auto bg-black text-white">
      <div className="p-10 my-auto mx-auto container flex flex-col justify-center text-center">
        <p>
          {"Copyright © "} {new Date().getFullYear()} Gilmore Marine
        </p>

        <Link href="/studio">
          <p className="text-xs md:text-sm mt-5">
            Gilmore Marine is a premier dealer of Bass, Crappie, Mod-V and
            Deep-V aluminum fishing boats
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
