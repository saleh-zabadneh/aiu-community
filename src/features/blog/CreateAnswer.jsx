import { useCreate } from "@/cache/reactquery/useCreate";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const CreateAnswer = ({ id }) => {
  // Changed parameter to destructure id
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const { isCreating, createFunction } = useCreate(
    "answer",
    `/answer/create/${id}`,
    {
      ar: "تم انشاء رد بنجاح",
      en: "Reply Submitted successfully",
    }
  );

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("content", data.content);
    formData.append("code_snippets", data.code_snippets);
    if (data.files && data.files.length > 0) {
      Array.from(data.files).forEach((file) => {
        formData.append("files[]", file);
      });
    }
    createFunction(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl mx-auto "
      >
        <Card className="w-full ">
          <CardHeader>
            <CardTitle className="text-2xl">Create Reply</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="content">Reply Content</Label>
              <Input
                disabled={isCreating}
                type="text"
                {...register("content", {
                  required: "This field is required",
                })}
                id="content"
                placeholder="Reply Answer "
                required
              />
              {errors.content && <p>{errors.content.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="code_snippets">Code : </Label>
              <Textarea
                id="code_snippets"
                disabled={isCreating}
                type="text"
                {...register("code_snippets", {
                  required: "This field is required",
                })}
              />
            </div>

            <div className="space-y-2">
              <Input
                type="file"
                multiple
                className="w-full p-4 border rounded-lg border-muted focus:border-primary focus:ring-primary"
                {...register("files")}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={isCreating} className="w-full">
              Add Reply
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default CreateAnswer;
