import HeroImage from "@/shared/components/hero/HeroImage";
import { Container } from "@/shared/components/layout";
import InfoPanel from "@/shared/components/info-panel/InfoPanel";
import { heroImageMaxWidth, heroImages } from "@/shared/constants";
import ExploreButton from "@/shared/components/explore/ExploreButton";
import { getImageProps, ImageProps } from "next/image";
import { cn } from "@/shared/lib/utils";

export default function Home() {
  const common = {
    ...heroImages.home.default,
  } as ImageProps;
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    ...heroImages.home.tablet,
  });
  const {
    props: { srcSet: mobile },
  } = getImageProps({
    ...common,
    ...heroImages.home.mobile,
  });

  return (
    <>
      <HeroImage
        sources={[
          { srcSet: mobile, maxWidth: heroImageMaxWidth.mobile },
          { srcSet: tablet, maxWidth: heroImageMaxWidth.tablet },
        ]}
        defaultSrc={heroImages.home.default.src}
        alt={heroImages.home.alt}
      />
      <section>
        <Container className="flex flex-col lg:max-w-5xl  2xl:max-w-7xl  lg:flex-row pb-14 lg:mt-24 xl:mt-28 lg:justify-between lg:gap-28 items-center justify-center flex-wrap">
          <InfoPanel
            className="mt-14 lg:text-left"
            subTitle="so,you want to travel toss"
            title="space"
            descriptionClassName={cn("lg:m-0")}
            description="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! "
          />
          <ExploreButton className="mt-12 md:mt-28" />
        </Container>
      </section>
    </>
  );
}
