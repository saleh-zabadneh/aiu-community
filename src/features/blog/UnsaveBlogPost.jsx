import { useCreate } from "@/cache/reactquery/useCreate";

const UnsaveBlogPost = (id) => {
  const { isCreating, createFunction } = useCreate(
    "saved posts ",
    `/problem/unsave/${id}`,
    {
      ar: "تم ازالة المنشور من المحفوظات  ",
      en: "Post Unsaved Successfully",
    }
  );
  return (
    <button
      disabled={isCreating}
      onClick={() => {
        createFunction();
      }}
    >
      Unsave
    </button>
  );
};

export default UnsaveBlogPost;
