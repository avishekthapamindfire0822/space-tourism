import useToggle from "./useToggle";

export default function useImageLoader(
  options: {
    initialState: boolean | (() => boolean);
  } = { initialState: true }
) {
  const { toggle: isImageLoading, setToggle: setIsImagLoading } = useToggle();
  return { isImageLoading, setIsImagLoading };
}
