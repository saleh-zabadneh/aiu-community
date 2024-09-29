import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ReplyList = ({ replies }) => {
  return (
    <div className="ml-8 space-y-4">
      {replies.map((reply) => (
        <div className="flex items-start gap-4" key={reply.id}>
          <Avatar className="border">
            <AvatarImage src={reply.image} />
            <AvatarFallback>{reply.full_name}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Link
                href="#"
                className="font-medium"
                title={reply.full_name}
                prefetch={false}
              >
                {reply.full_name}
              </Link>
              <p className="text-xs text-muted-foreground">
                <time>{reply.created_at}</time>
              </p>
            </div>
            <p>{reply.comment}</p>
            <div className="flex items-center gap-4 mt-2">
              <Button variant="ghost" size="icon" title="Like">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReplyList;
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

function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
