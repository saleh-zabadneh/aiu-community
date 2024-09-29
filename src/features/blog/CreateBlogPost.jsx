import { useCreate } from "@/cache/reactquery/useCreate";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateBlogPost = ({ tags }) => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { isCreating, createFunction } = useCreate(
    "blog posts",
    "/problem/create",
    {
      ar: "تم انشاء المنشور بنجاح",
      en: "post created successfully",
    }
  );
  function onSubmit(data) {
    console.log(data);
    createFunction(data, {
      onSuccess: (data) => {
        reset();
        navigate("/blog");
        console.log(data);
      },
    });
  }
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 bg-black">
      <input
        disabled={isCreating}
        type="text"
        className="bg-red-400"
        {...register("title", {
          required: "This field is required",
        })}
      />
      {errors.student_id && (
        <p className="text-green-400">{errors.title.message}</p>
      )}
      <input
        disabled={isCreating}
        type="text"
        className="bg-red-400"
        {...register("content", {
          required: "This field is required",
        })}
      />
      {errors.student_id && (
        <p className="text-green-400">{errors.content.message}</p>
      )}

      <button className="text-white" disabled={isCreating}>
        create post
      </button>
    </form>
  );
};

export default CreateBlogPost;
