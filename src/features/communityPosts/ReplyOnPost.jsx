import { useCreate } from "@/cache/reactquery/useCreate";
import Spinner from "@/components/global/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const ReplyOnPost = ({ commentId }) => {
  const { isCreating, createFunction } = useCreate(
    "post upvote",
    `/comment/reply/${commentId}`,
    {
      ar: "تم تقديم الصوت بنجاح ",
      en: "Reply submitted successfully ",
    }
  );
  const { register, handleSubmit, reset, getValues, formState, setValue } =
    useForm({
      defaultValues: {},
    });
  const { errors } = formState;
  function onSubmit(data) {
    console.log(data);
    createFunction(data, {
      onSuccess: (data) => {
        reset();
        console.log(data);
      },
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center mt-4">
      <Input
        type="text"
        {...register("comment")}
        placeholder="Write a Reply..."
      />
      <div className="flex items-center gap-4 mt-2">
        <Button disable={isCreating} variant="secondary" type="submit">
          {isCreating ? <Spinner /> : " Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ReplyOnPost;
