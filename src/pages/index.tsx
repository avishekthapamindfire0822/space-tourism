"use client";
import HeroImage from "@/shared/components/hero/HeroImage";
import { heroImages } from "@/shared/constants";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [screeData, setScreenData] = useState({
    width: 0,
    devicePixelRatio: 0,
  });
  useEffect(() => {
    setScreenData({
      width: window.innerWidth,
      devicePixelRatio: window.devicePixelRatio,
    });
    window.addEventListener("resize", function () {
      setScreenData({
        width: window.innerWidth,
        devicePixelRatio: window.devicePixelRatio,
      });
    });
  }, []);
  return (
    <>
      <HeroImage
        sources={heroImages.home.sources}
        defaultSrc={heroImages.home.defaultSrc}
        alt=""
      />
      <div className="text-white">
        <p>Width - {screeData.width}</p>
        <p>Pixed - {screeData.devicePixelRatio}</p>
      </div>
    </>
  );
}
