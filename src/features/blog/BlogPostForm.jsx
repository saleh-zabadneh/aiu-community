import parserBabel from "prettier/parser-babel";
import prettier from "prettier";
import { useCreate } from "@/cache/reactquery/useCreate";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
import { Textarea } from "@/components/ui/textarea";
import TagsList from "./TagsList";
const BlogPostForm = ({ tags }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();
  const { isCreating, createFunction } = useCreate(
    "blog posts",
    "/problem/create",
    {
      ar: "تم انشاء المنشور بنجاح",
      en: "post created successfully",
    }
  );
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("content", data.content);
    formData.append("title", data.title);
    formData.append("code_snippets", data.code_snippets);

    const tagsArray = selectedTags.map((tag) => tag.name);
    tagsArray.forEach((tag) => {
      formData.append("tags[]", tag);
    });
    if (data.files && data.files.length > 0) {
      Array.from(data.files).forEach((file) => {
        formData.append("files[]", file);
      });
    }
    createFunction(formData);
  };

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) => {
      if (prevTags.some((t) => t.id === tag.id)) {
        return prevTags.filter((t) => t.id !== tag.id); // Remove tag if already selected
      } else {
        return [...prevTags, tag]; // Add tag if not selected
      }
    });
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl mx-auto "
      >
        <Card className="w-full ">
          <CardHeader>
            <CardTitle className="text-2xl">Create Coding Post</CardTitle>
            <CardDescription>
              Enter your Problem Title and let the Community Play .
            </CardDescription>
          </CardHeader>
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
                placeholder="ex. how create authentication in react"
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
                placeholder="First : install react "
                required
              />
              {errors.content && <p>{errors.content.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="code_snippets">code_snippets</Label>
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
              <Label>Tags</Label>
              <TagsList
                tags={tags}
                onTagClick={handleTagClick}
                selectedTags={selectedTags}
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
              Create Post
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default BlogPostForm;
