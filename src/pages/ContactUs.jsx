import ConsoleForm from "@/components/hover.dev/forms/ConsoleForm";
import Layout from "@/components/layout/Layout";
import { useScrollToTopOnRouteChange } from "@/hooks/useScrollToTopOnRouteChange";

const ContactUs = () => {
  useScrollToTopOnRouteChange();
  return (
    <Layout>
      <ConsoleForm />
    </Layout>
  );
};

export default ContactUs;
