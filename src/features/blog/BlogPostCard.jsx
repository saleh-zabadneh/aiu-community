import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
const BlogPostCard = ({ post }) => {
  const { id } = post;
  //   const { id, content, upvotes, downvotes, code_snippets, title } = post;
  return (
    <Link to={`/blog/it/posts/${id}`} className="relative max-w-2xl mx-auto">
      <Card>
        <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea] to-[#c084fc] opacity-20 rounded-lg blur-xl" />
        <CardHeader className="flex items-center gap-4 p-6">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">
              Solving the Fibonacci Sequence in JavaScript
            </h3>
            <p className="text-sm text-muted-foreground">By Shadcn</p>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <p>
            The Fibonacci sequence is a classic programming problem that
            challenges developers to write efficient code to generate the
            sequence. In this blog post, we will explore a few different
            approaches to solving the Fibonacci sequence in JavaScript.
          </p>
          <div className="p-4 my-6 rounded-md bg-muted">
            <pre className="text-sm">
              <code>{`
function fibonacci(n) {
if (n <= 1) {
return n;
}
return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // Output: 55
          `}</code>
            </pre>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ArrowUpIcon className="w-5 h-5 text-green-500" />
              <span>123</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowDownIcon className="w-5 h-5 text-red-500" />
              <span>45</span>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">
                  Great explanation, thanks!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Jane Doe</p>
                <p className="text-sm text-muted-foreground">
                  Awesome, I learned something new today!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPostCard;

function ArrowDownIcon(props) {
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
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function ArrowUpIcon(props) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}
