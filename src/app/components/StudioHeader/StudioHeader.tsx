import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/Logo.png";

const StudioHeader = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <Image
            className="ml-5"
            src={Logo}
            alt="Gilmore Marine Logo"
            style={{ width: "200px", height: "50px" }}
          />
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioHeader;
