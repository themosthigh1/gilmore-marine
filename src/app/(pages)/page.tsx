import Image from "next/image";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroBottom from "../components/HeroSection/HeroBottom";
import HomeContent from "../components/HomeContent/HomeContent";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <HeroBottom />
        <HomeContent />
      </div>
    </main>
  );
}
