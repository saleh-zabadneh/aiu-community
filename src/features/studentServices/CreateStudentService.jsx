import { useState } from "react";
import { useCreate } from "@/cache/reactquery/useCreate";
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
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateStudentService = () => {
  const navigate = useNavigate();
  const { isCreating, createFunction } = useCreate(
    "services",
    "/service/create",
    {
      ar: "تم بنجاح",
      en: "Service Created Successfully",
    }
  );

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryMapping = {
    1: "Graphic Design",
    2: "Photography",
    3: "Content Creation",
    4: "Video Editing",
  };

  function onSubmit(data) {
    console.log(data);
    const formData = new FormData();
    if (data.files && data.files.length > 0) {
      Array.from(data.files).forEach((file) => {
        formData.append("files[]", file);
      });
    }
    formData.append("content", data.content || "");
    formData.append("title", data.title || "");
    if (selectedCategory) {
      formData.append("category_id", selectedCategory);
      formData.append("category_name", categoryMapping[selectedCategory]);
    }

    createFunction(formData, {
      onSuccess: (data) => {
        navigate(`/students/services/all-category/${selectedCategory}`);
        reset();
        console.log(data);
      },
    });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4 md:space-x-4">
        <Button
          className={selectedCategory === 1 ? "bg-blue-500 text-white" : ""}
          onClick={() => setSelectedCategory(1)}
        >
          Graphic Design
        </Button>
        <Button
          className={selectedCategory === 2 ? "bg-blue-500 text-white" : ""}
          onClick={() => setSelectedCategory(2)}
        >
          Photography
        </Button>
        <Button
          className={selectedCategory === 3 ? "bg-blue-500 text-white" : ""}
          onClick={() => setSelectedCategory(3)}
        >
          Voice Over
        </Button>
        <Button
          className={selectedCategory === 4 ? "bg-blue-500 text-white" : ""}
          onClick={() => setSelectedCategory(4)}
        >
          Coding
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <Card className="w-full max-w-md py-4">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                disabled={isCreating}
                type="text"
                {...register("title", {
                  required: "This field is required",
                })}
                id="title"
                placeholder="Example title"
                required
              />
              {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Input
                disabled={isCreating}
                type="text"
                {...register("content", {
                  required: "This field is required",
                })}
                id="content"
                placeholder="Example Content"
                required
              />
              {errors.content && <p>{errors.content.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="files">Files</Label>
              <Input
                type="file"
                id="files"
                disabled={isCreating}
                {...register("files")}
                multiple
              />
              {errors.files && <p>{errors.files.message}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={isCreating} className="w-full">
              Create Service
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default CreateStudentService;
