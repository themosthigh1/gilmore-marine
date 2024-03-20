import PageTitle from "@/app/components/PageTitle/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gilmore Marine",
  description: "Gilmore Marine Boat Sales of North Carolina",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageTitle />
      <div className="p-10 my-auto mx-auto container">{children}</div>
    </div>
  );
}
