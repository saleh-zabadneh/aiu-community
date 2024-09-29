// LanguageContext.js
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { createContext, useEffect } from "react";

export const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorageState("en", "language"); // Persist language state
  const [direction, setDirection] = useLocalStorageState("ltr", "direction"); // Persist direction state

  useEffect(() => {
    // Set the direction on initial load based on the stored language
    document.body.dir = language === "ar" ? "ltr" : "ltr";
    setDirection(language === "ar" ? "ltr" : "ltr");
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setDirection(newLanguage === "ar" ? "ltr" : "ltr");
    document.body.dir = newLanguage === "ar" ? "ltr" : "ltr";
    window.location.reload(); // Reload the page to apply the language changes
  };
  return (
    <LanguageContext.Provider value={{ language, direction, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// // LanguageContext.js
// import { useLocalStorageState } from "@/hooks/useLocalStorageState";
// import { createContext, useEffect } from "react";

// export const LanguageContext = createContext({});

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useLocalStorageState("en", "language"); // Persist language state
//   const [direction, setDirection] = useLocalStorageState("ltr", "direction"); // Persist direction state

//   useEffect(() => {
//     // Set the direction on initial load based on the stored language
//     document.body.dir = language === "ar" ? "rtl" : "ltr";
//     setDirection(language === "ar" ? "rtl" : "ltr");
//   }, [language]);

//   const changeLanguage = (newLanguage) => {
//     setLanguage(newLanguage);
//     setDirection(newLanguage === "ar" ? "rtl" : "ltr");
//     document.body.dir = newLanguage === "ar" ? "rtl" : "ltr";
//     window.location.reload(); // Reload the page to apply the language changes
//   };
//   return (
//     <LanguageContext.Provider value={{ language, direction, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };
