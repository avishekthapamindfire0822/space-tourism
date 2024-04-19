import { useState } from "react";

export function useToggle(
  options: {
    initialState?: boolean | (() => boolean);
  } = { initialState: true }
) {
  const [toggle, setToggle] = useState(options.initialState);
  return { toggle, setToggle };
}

export default useToggle;
