import { SignupFormGrid } from "@/features/auth/signup/SignUpFormGrid";

import { useScrollToTopOnRouteChange } from "@/hooks/useScrollToTopOnRouteChange";

const Signup = () => {
  useScrollToTopOnRouteChange();

  return (
    <div>
      <SignupFormGrid />
    </div>
  );
};

export default Signup;
