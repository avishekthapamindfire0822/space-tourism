export default async function generateBlurImageUrl(...sources: string[]) {
  if (typeof window !== "undefined") {
    return;
  }
  const fs = await import("fs/promises");
  const path = await import("path");
  const { getPlaiceholder } = await import("plaiceholder");
  const _blurImageUrls = sources.map(async (src) => {
    const buffer = await fs.readFile(path.join("./public", src));
    return getPlaiceholder(buffer, { size: 10 });
  });
  const blurImageUrls = await Promise.allSettled(_blurImageUrls);
  return blurImageUrls.map((result) => {
    if (result.status === "fulfilled") {
      return result.value.base64;
    }
    return "";
  });
}
