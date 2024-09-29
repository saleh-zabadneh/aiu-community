import { useCreate } from "@/cache/reactquery/useCreate";

const SaveBlogPost = (id) => {
  const { isCreating, createFunction } = useCreate(
    "saved posts ",
    `/problem/save/${id}`,
    {
      ar: "تم حفظ المشروع بنجاح ",
      en: "Post Saved Successfully",
    }
  );
  return (
    <button
      disabled={isCreating}
      onClick={() => {
        createFunction();
      }}
    >
      Save
    </button>
  );
};

export default SaveBlogPost;
