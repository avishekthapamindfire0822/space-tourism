import HeroImage from "@/shared/components/hero/HeroImage";
import { PageContainer } from "@/shared/components/layout";
import PageTitle from "@/shared/components/page-title";
import { heroImageMaxWidth, heroImages } from "@/shared/constants";
import { cn } from "@/shared/lib/utils";
import Box from "@/shared/ui/Box";
import { getImageProps, ImageProps } from "next/image";
import React, { useCallback, useMemo } from "react";
import { Destination, DestinationData } from "@/shared/types";
import { useSelectedDestination } from "@/features/destination/hooks";
import { useImageLoader } from "@/shared/hooks";
import { GetStaticProps } from "next";
import {
  DestinationDetail,
  DestinationImage,
  DestinationTabs,
} from "@/features/destination/components";

interface DestinationPageProps {
  destinations: DestinationData;
}

export const getStaticProps: GetStaticProps<DestinationPageProps> = async (
  context
) => {
  const destinationJSONData = (await import("@/data/data.json"))
    .default as DestinationData;
  const imageUrls = Object.values(destinationJSONData).map(
    ({ imageUrl }) => imageUrl
  );
  const generateImageUrl = (await import("@/shared/lib/generateBlurImageUrl"))
    .default;
  const blurImageUrls = await generateImageUrl(...imageUrls);
  const formattedDestinationResult = Object.entries(
    destinationJSONData
  ).reduce<DestinationData>((accum, [key, destination], index) => {
    accum[key] = {
      ...destination,
      blurImageUrl: blurImageUrls?.[index],
    } as Destination;
    return accum;
  }, {});
  return {
    props: {
      destinations: formattedDestinationResult,
    },
  };
};

const DestinationPage = ({ destinations }: DestinationPageProps) => {
  const { selectedDestination, setSelectedDestination } =
    useSelectedDestination();

  const { isImageLoading, setIsImagLoading } = useImageLoader();
  const common = {
    ...heroImages.destination.default,
  } as ImageProps;
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    ...heroImages.destination.tablet,
  });
  const {
    props: { srcSet: mobile },
  } = getImageProps({
    ...common,
    ...heroImages.destination.mobile,
  });
  const destinationDetails: Destination = useMemo(
    () => (destinations as DestinationData)[selectedDestination],
    [selectedDestination, destinations]
  );
  const tabItemClickHandler = useCallback(
    (tab?: string) => {
      if (tab) {
        setSelectedDestination(tab);
      }
    },
    [setSelectedDestination]
  );
  return (
    <>
      <HeroImage
        sources={[
          { srcSet: mobile, maxWidth: heroImageMaxWidth.mobile },
          { srcSet: tablet, maxWidth: heroImageMaxWidth.tablet },
        ]}
        defaultSrc={heroImages.destination.default.src}
        alt={heroImages.destination.alt}
      />

      <PageContainer className="md:mt-4 lg:mt-8 xl:mt-14">
        <Box
          className={cn(
            "grid lg:gap-y-3 lg:grid-cols-2 lg:justify-end lg:w-full"
          )}
        >
          <PageTitle className={cn("lg:col-span-full")}>
            <span className={cn("inline-block mr-3 font-bold text-gray-500")}>
              01
            </span>
            <span>pick your destination</span>
          </PageTitle>
          <DestinationImage
            key={selectedDestination}
            src={destinationDetails.imageUrl}
            fill
            alt={destinationDetails.title}
            className={cn("col-span-1 justify-self-center")}
            imageProps={{
              className: "object-contain",
            }}
            {...(destinationDetails.blurImageUrl
              ? {
                  placeholder: "blur",
                  blurDataURL: destinationDetails.blurImageUrl,
                }
              : {})}
          />
          <Box>
            <DestinationTabs
              className={cn("mt-8 md:mt-4")}
              currentTab={selectedDestination.toString()}
              onTabItemClick={tabItemClickHandler}
            />
            <DestinationDetail
              title={destinationDetails.title}
              description={destinationDetails.description}
              distance={destinationDetails.distance}
              travelTime={destinationDetails.travelTime}
            />
          </Box>
        </Box>
      </PageContainer>
    </>
  );
};

export default DestinationPage;
