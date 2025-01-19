import { useState } from "react";

const useToggle = () => {
  const [value, setValue] = useState(false);

  const toggle = () => setValue((prevValue) => !prevValue);

  return { value, setValue, toggle };
};

export default useToggle;
