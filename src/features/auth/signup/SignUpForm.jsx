import Logo from "@/components/global/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="grid w-full min-h-screen md:grid-cols-2">
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#6366F1] to-[#9333EA] p-8 md:p-12">
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
      </div>
      <div className="flex flex-col items-center justify-center p-8 md:p-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Enter your details below to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="johndoe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign Up</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUpForm;
