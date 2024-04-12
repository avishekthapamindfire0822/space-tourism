import HeroImage from "@/shared/components/hero/HeroImage";
import { heroImages } from "@/shared/constants";

export default function Home() {
  return (
    <>
      <HeroImage
        sources={heroImages.home.sources}
        defaultSrc={heroImages.home.defaultSrc}
        alt=""
      />
    </>
  );
}
