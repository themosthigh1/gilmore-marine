"use client";
import React, { FC } from "react";
import TitleBakground from "../../../../public/images/PageTitle.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const PageTitle: FC = () => {
  const pathname = usePathname();

  return (
    <div className="mb-10 shadow-xl">
      <div
        className="h-[175px]"
        style={{
          position: "absolute",
          width: "100vw",
          overflow: "hidden",
          zIndex: "-1",
        }}
      >
        <Image
          src={TitleBakground}
          alt={"Title Background"}
          quality={100}
          fill
          sizes="100vw"
          objectFit="cover"
        />
      </div>
      <div
        className="text-white py-[8vh]"
        style={{
          fontSize: "2rem",
          lineHeight: "3rem",
          textAlign: "center",
        }}
      >
        {pathname.slice(1).replace(/-/g, " ").toUpperCase()}
      </div>
    </div>
  );
};

export default PageTitle;
