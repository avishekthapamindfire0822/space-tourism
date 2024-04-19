import { DESTINATION } from "@/shared/constants";
import { useState } from "react";

export default function useSelectedDestination(
  options: {
    initialState: string | (() => string);
  } = { initialState: DESTINATION.MOON }
) {
  const [selectedDestination, setSelectedDestination] = useState(
    options.initialState
  );
  return { selectedDestination, setSelectedDestination };
}
