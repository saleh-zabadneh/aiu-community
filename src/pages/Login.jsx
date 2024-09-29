import { useEffect } from "react";
import { useScrollToTopOnRouteChange } from "@/hooks/useScrollToTopOnRouteChange";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/global/Logo";
import { Button } from "@/components/ui/button";
import LoginForm from "@/features/auth/login/LoginForm";
import toast from "react-hot-toast";
import { AnimatedBeam3x3 } from "@/components/magicui/demo/animatedBeam/AnimatedBeam3x3";
import AnimatedShinyTextDemo from "@/components/magicui/demo/animatedShinyTextDemo/AnimatedShinyTextDemo";
import { SparklesTextDemo } from "@/components/magicui/demo/sparklesTextDemo/SparklesTextDemo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/magicui/demo/animatedBeam/AnimatedBeamMultiOutput";

const Login = () => {
  useScrollToTopOnRouteChange();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user?.user) {
      toast.success("You are already logged in");
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="grid w-full min-h-screen md:grid-cols-2">
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#6366F102] to-[#9333EA02] p-8 md:p-12">
        <div className="max-w-md space-y-4">
          <div className="flex items-center space-x-2">
            <Logo width="80" height="80" className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">AIU Community</span>
          </div>
          <h1 className="text-4xl font-bold text-white">
            Unlock your creative potential
          </h1>
          <p className="text-lg text-white/80">
            Join our community of innovators and start building your next big
            idea today.
          </p>
          <AnimatedBeamMultipleOutputDemo className=" top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        </div>
      </div>
      {/* <AnimatedShinyTextDemo />
        <AnimatedBeam3x3 />
        <SparklesTextDemo /> */}
      {/* </div> */}
      <LoginForm />
    </div>
  );
};

export default Login;

{
  /* <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#6366F1] to-[#9333EA] p-8 md:p-12">
<div className="max-w-md space-y-4">
  <div className="flex items-center space-x-2">
    <Logo width="80" height="80" className="w-8 h-8 text-white" />
    <span className="text-2xl font-bold text-white">Acme</span>
  </div>
  <h1 className="text-4xl font-bold text-white">
    Unlock your creative potential
  </h1>
  <p className="text-lg text-white/80">
    Join our community of innovators and start building your next big
    idea today.
  </p>
  <div className="flex items-center space-x-4">
    <Button
      variant="outline"
      className="text-white border-white hover:bg-white hover:text-[#6366F1]"
    >
      Learn More
    </Button>
    <Link
      href="#"
      className="text-white underline underline-offset-4 hover:text-white/80"
      prefetch={false}
    >
      Explore Features
    </Link>
  </div>
</div>
</div> */
}
