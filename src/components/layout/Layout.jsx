import ContactWithLink from "../global/ContactWithLink";
import { Footer } from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <NavbarSimple /> */}
      {/* <NavbarSimpleTest /> */}
      <ContactWithLink />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
