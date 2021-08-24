import { useState, useEffect } from "react";

const usePersister = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage);
    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    return () => {
      localStorage.removeItem(key);
    };
  }, [value]);

  return [value, setValue];
};

export default usePersister;
