// import { useState, useEffect } from "react";

// export const useLocalStorageState = (defaultValue, key) => {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
//   });

//   useEffect(() => {
//     const storedValue = localStorage.getItem(key);
//     if (storedValue !== null) {
//       setValue(JSON.parse(storedValue));
//     } else {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
//   }, [key]);

//   const updateValue = (newValue) => {
//     setValue(newValue);
//     localStorage.setItem(key, JSON.stringify(newValue));
//   };

//   return [value, updateValue];
// };
// useLocalStorageState.js
import { useState, useEffect } from "react";

export const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
