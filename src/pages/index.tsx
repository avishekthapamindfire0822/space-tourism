import HeroImage from "@/shared/components/hero/HeroImage";
import InfoPanel from "@/shared/components/info-panel/InfoPanel";
import { heroImageMaxWidth, heroImages } from "@/shared/constants";
import ExploreButton from "@/shared/components/explore/ExploreButton";
import { getImageProps, ImageProps } from "next/image";
import { cn } from "@/shared/lib/utils";
import Box from "@/shared/ui/Box";
import { PageContainer } from "@/shared/components/layout";

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
      <PageContainer>
        <InfoPanel
          className={cn("mt-14")}
          subTitle="so,you want to travel toss"
          title="space"
          description="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
          titleProps={{
            className: cn("!text-white text-heading-2 md:text-heading-1"),
          }}
          descriptionProps={{
            className: cn(
              "lg:m-0 !text-secondary text-body  lg:text-left max-w-xs lg:max-w-sm lg:tracking-wider text-center mx-auto leading-6"
            ),
          }}
          subTitleProps={{
            className: cn("text-base tracking-2.7 lg:text-heading-5"),
          }}
        />
        <Box className={cn("text-center ")}>
          <ExploreButton className="mt-12 md:mt-28" />
        </Box>
      </PageContainer>
    </>
  );
}
