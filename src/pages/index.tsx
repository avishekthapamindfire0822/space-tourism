import HeroImage from "@/shared/components/hero/HeroImage";
import { backgroundImage } from "@/shared/constants";
import { cn } from "@/shared/lib/utils";

export default function Home() {
  return (
    <>
      <HeroImage
        srcSets={backgroundImage.home.srcSets}
        src={backgroundImage.home.src}
        alt="Explore Space"
      />
    </>
  );
}
