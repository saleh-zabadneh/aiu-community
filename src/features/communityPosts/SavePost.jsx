import { useCreate } from "@/cache/reactquery/useCreate";
import { Button } from "@/components/ui/button";

const SavePost = ({ postId }) => {
  const { isCreating, createFunction } = useCreate(
    "post upvote",
    `/post/save/${postId}`,
    {
      ar: "تم حفظ المنشور بنجاح ",
      en: "Post Saved successfully ",
    }
  );
  return (
    <>
      <Button
        disabled={isCreating}
        onClick={() => {
          createFunction();
        }}
        variant="ghost"
        size="icon"
        title="Like"
        className="text-muted-foreground hover:bg-muted/50"
      >
        <BookmarkIcon className="w-4 h-4" />
        <span className="sr-only">Save</span>
      </Button>
    </>
  );
};

export default SavePost;
function BookmarkIcon(props) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}
