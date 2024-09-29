import { useLanguage } from "@/hooks/useLanguage";
import styled from "styled-components";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { useCallback, useState } from "react";

const LanguageContainer = styled.div`
  position: relative;
  display: flex;
  color: var(--color-text);
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: var(--color-secondary-100);
  }
`;

const LanguageDropdown = styled.div`
  z-index: 1000;
  position: absolute;
  top: calc(100% + 10px);
  /* left: 0; */
  /* ${(props) =>
    props.language === "ar" ? "right: -2rem;" : "left: -2rem;"} */
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  border: 1px solid #fff;
  background-color: red;
  background-color: var(--card);
  text-align: center;
  border-radius: var(--radius);
  align-items: center;
  color: var(--primary-foreground);
  justify-content: center;
`;

const LanguageItem = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 12px;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: var(--accent);
  }
`;

const StyledLanguageSwitcherIcon = styled(HiOutlineGlobeAlt)`
  color: var(--color-grey-0);
  font-size: 32px;
`;

const LanguageName = styled.p`
  margin-left: 10px;
`;
const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleChangeLanguage = useCallback(
    (newLanguage) => {
      changeLanguage(newLanguage);
      setIsOpen(false);
    },
    [changeLanguage]
  );
  const getFontClass = (lang) => {
    switch (lang) {
      case "en":
        return "font-english";
      case "ar":
        return "font-arabic";
      default:
        return "font-english";
    }
  };
  return (
    <LanguageContainer
      onClick={handleToggleDropdown}
      className={`${getFontClass()} relative flex text-var(--color-text) items-center cursor-pointer transition-color duration-300 ease-in-out hover:text-var(--color-secondary-100)`}
    >
      <StyledLanguageSwitcherIcon />
      {/* <LanguageName>{language === "ar" ? "العربية" : "English"}</LanguageName> */}
      {/* <LanguageDropdown isOpen={isOpen} language={language}>
        <LanguageItem onClick={() => handleChangeLanguage("ar")}>
          <LanguageName>العربية</LanguageName>
        </LanguageItem>
        <LanguageItem onClick={() => handleChangeLanguage("en")}>
          <LanguageName>English</LanguageName>
        </LanguageItem>
      </LanguageDropdown> */}
    </LanguageContainer>
  );
};

export default LanguageSwitcher;
