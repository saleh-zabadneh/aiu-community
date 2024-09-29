import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useCreate } from "@/cache/reactquery/useCreate";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";

export default function CreateCommunityPostForm() {
  const { user } = useAuth();
  const [category, setCategory] = useState("");
  const { register, handleSubmit, setValue, formState } = useForm({
    defaultValues: {
      content: "",
      category: "",
      faculty: "",
      anonymous: false,
      files: [],
    },
  });
  const { errors } = formState;
  const { isCreating, createFunction } = useCreate(
    "community posts",
    "/post/create",
    {
      ar: "تم انشاء المنشور بنجاح",
      en: "Post created successfully",
    }
  );

  const onSubmit = (data) => {
    console.log(data);
    console.log(user.user.id);
    const formData = new FormData();
    formData.append("content", data.content);
    formData.append("category", data.category);
    formData.append("faculty", data.faculty);
    formData.append("user_id", user.user.id);

    formData.append("anonymous", data.anonymous ? "1" : "0");
    if (data.files && data.files.length > 0) {
      Array.from(data.files).forEach((file) => {
        formData.append("files[]", file);
      });
    }
    createFunction(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Textarea
          placeholder="What's on your mind?"
          className="w-full p-4 text-lg border rounded-lg resize-none border-muted focus:border-primary focus:ring-primary"
          rows={4}
          {...register("content", { required: "Content is required" })}
        />
        {errors.content && (
          <span className="text-red-500">{errors.content.message}</span>
        )}
      </div>
      <div className="flex items-center gap-4">
        {["Funny", "University", "متطلبات", "other"].map((cat) => (
          <Button
            key={cat}
            type="button"
            variant={category === cat ? "solid" : "outline"}
            onClick={() => {
              setCategory(cat);
              setValue("category", cat);
            }}
            className="flex-1"
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </div>
      <Input
        type="hidden"
        {...register("category", { required: "Category is required" })}
      />
      {errors.category && (
        <span className="text-red-500">{errors.category.message}</span>
      )}
      <div>
        <label htmlFor="faculty" className="mb-1.5 block text-zinc-400">
          Faculty
        </label>
        <Select
          disabled={isCreating}
          onValueChange={(value) => setValue("faculty", value)}
          className="w-full"
        >
          <SelectTrigger className="w-full px-3 py-2 transition-shadow border rounded-md border-zinc-700 bg-zinc-900 placeholder-zinc-500 ring-1 ring-transparent focus:outline-0 focus:ring-blue-700">
            <SelectValue placeholder="Select your Faculty" />
          </SelectTrigger>
          <SelectContent className="text-white bg-zinc-900">
            <SelectItem value="الصيدلة">Pharmacy</SelectItem>
            <SelectItem value="الهندسة المعلوماتية والاتصالات">
              Information and Communications Engineering (it)
            </SelectItem>
            <SelectItem value="الهندسة المدنية"> Civil Engineering</SelectItem>
            <SelectItem value="إدارة الأعمال">
              Business Administration
            </SelectItem>
            <SelectItem value="الحقوق">Law</SelectItem>
            <SelectItem value="طب الأسنان">Dentistry </SelectItem>
            <SelectItem value="الفنون">Arts</SelectItem>
            <SelectItem value="الهندسة المعمارية">
              Architecture Engineering
            </SelectItem>
          </SelectContent>
        </Select>
        {errors.faculty && <p>{errors.faculty.message}</p>}
      </div>
      <div className="flex items-center gap-2">
        <Label
          htmlFor="anonymous"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <Switch
            id="anonymous"
            aria-label="Post anonymously"
            {...register("anonymous")}
          />
          Post anonymously
        </Label>
      </div>
      <div>
        <Input
          type="file"
          multiple
          className="w-full p-4 border rounded-lg border-muted focus:border-primary focus:ring-primary"
          {...register("files")}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isCreating}>
        {isCreating ? "Creating..." : "Create Post"}
      </Button>
    </form>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
