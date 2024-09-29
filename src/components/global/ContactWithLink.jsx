import { Link } from "react-router-dom";
import ShimmerButton from "../magicui/ShimmerButton";
import { useEffect, useState } from "react";

const ContactWithLink = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(window.hideWhatsAppLinkTimeout);
      window.hideWhatsAppLinkTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 9000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(window.hideWhatsAppLinkTimeout);
    };
  }, []);

  return (
    isVisible && (
      <Link
        to="/contact"
        className={`fixed z-[10000] bottom-6 left-6`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShimmerButton className="p-2 mx-auto text-sm shadow-2xl ">
          Contact Us
        </ShimmerButton>
      </Link>
    )
  );
};

export default ContactWithLink;
