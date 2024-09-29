import { useCreate } from "@/cache/reactquery/useCreate";
import { Button } from "@/components/ui/button";

const Upvote = ({ id, number }) => {
  const { isCreating, createFunction } = useCreate(
    "post upvote",
    `/problem/upvote/${id}`,
    {
      ar: "تم تقديم الصوت بنجاح ",
      en: "vote submitted successfully ",
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
        className="text-muted-foreground hover:bg-muted/50"
      >
        <HeartIcon className="w-5 h-5" />
        <span className="sr-only">Upvote</span>
      </Button>
      <span className="text-muted-foreground">{number || "12"}</span>
    </>
  );
};

export default Upvote;
function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
