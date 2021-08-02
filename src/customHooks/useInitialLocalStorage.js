import { useEffect, useState } from "react";

const useInitialLocalStorage = (key, initialValue) => {
  const init = JSON.parse(localStorage.getItem(key));

  const _initialValue = init ? init : initialValue;
  const [state, setState] = useState(_initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useInitialLocalStorage;
