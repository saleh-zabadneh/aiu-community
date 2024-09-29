import { useCreate } from "@/cache/reactquery/useCreate";
import AnimatedShinyText from "@/components/magicui/AnimatedShinyText";
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
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isCreating, createFunction } = useCreate("user", "/user/login", {
    ar: "تم تسحيل الدخول بنجاح",
    en: "sign up successfully",
  });
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  function onSubmit(data) {
    console.log(data);
    createFunction(data, {
      onSuccess: (data) => {
        reset();
        navigate("/");
        console.log(data);
        login(data);
      },
    });
  }
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Enter your details below to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="student_id">Studient Id</Label>
              <Input
                disabled={isCreating}
                type="text"
                {...register("student_id", {
                  required: "This field is required",
                })}
                id="student_id"
                placeholder="20*******"
                required
              />
              {errors.student_id && <p>{errors.student_id.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                disabled={isCreating}
                type="password"
                placeholder="*********"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters ",
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={isCreating} className="w-full">
              Login
            </Button>
          </CardFooter>
        </Card>
      </form>
      <div className="z-10 flex items-center justify-center mt-12">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <Link to="/signup">✨ do not have account ?</Link>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
