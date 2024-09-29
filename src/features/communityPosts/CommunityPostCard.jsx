import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useCommenting } from "@/hooks/useCommenting";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Comment from "./Comment";
import Like from "./Like";
import SavePost from "./SavePost";
import CommentList from "./CommentList";
import ReplyOnPost from "./ReplyOnPost";

const PostCarousel = ({ files }) => (
  <Carousel className="w-full max-w-2xl">
    {files?.map((file) => (
      <CarouselContent key={file.id}>
        <CarouselItem>
          <img
            src={file.path || ""}
            width={800}
            height={450}
            alt={file.id}
            className="object-cover rounded-md aspect-video"
          />
        </CarouselItem>
      </CarouselContent>
    ))}

    <CarouselPrevious title="Previous" />
    <CarouselNext title="Next" />
  </Carousel>
);

const CommentSection = ({ comments, onReply, postId }) => (
  <div className="space-y-4">
    {comments.map((comment) => (
      <div className="flex items-start gap-4" key={comment.id}>
        <Avatar className="border">
          <AvatarImage src={comment.avatar} />
          <AvatarFallback>{comment.initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="font-medium"
              title={comment.author}
              prefetch={false}
            >
              {comment.author}
            </Link>
            <p className="text-xs text-muted-foreground">
              <time dateTime={comment.time}>{comment.timeAgo}</time>
            </p>
          </div>
          <p>{comment.text}</p>
          <div className="flex items-center gap-4 mt-2">
            <Button variant="ghost" size="icon" title="Like">
              <HeartIcon className="w-4 h-4" />
              <span className="sr-only">Like</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title="Reply"
              onClick={() => onReply(comment.id)}
            >
              <MessageCircleIcon className="w-4 h-4" />
              <span className="sr-only">Reply</span>
            </Button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ReplySection = ({ onCancel, onSubmit }) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="mt-4">
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write a reply..."
      />
      <div className="flex items-center gap-4 mt-2">
        <Button variant="primary" onClick={() => onSubmit(inputValue)}>
          Submit
        </Button>
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

const CommunityPostCard = ({ post }) => {
  const [showComment, setShowComment] = useState(false);
  const [replyingToCommentId, setReplyingToCommentId] = useState(null);
  const handleCommentClick = () => {
    setShowComment(!showComment);
    setReplyingToCommentId(null); // Reset reply state if comment section is toggled
  };

  const handleReplyClick = (commentId) => {
    setReplyingToCommentId(commentId);
  };
  const {
    comments,
    replyTo,
    handleReply,
    handleCancelReply,
    handleSubmitReply,
  } = useCommenting(post.comments);

  return (
    <Card className="w-full max-w-2xl ">
      <CardHeader className="flex gap-4 p-4">
        <div className="flex items-center justify-between gap-2">
          <Avatar className="flex border ">
            <AvatarImage src={post.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className=""
                title="More options"
              >
                <MoveHorizontalIcon className="w-4 h-4" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <FlagIcon className="w-4 h-4 mr-2" />
                Delete post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-between ">
          <Link href="#" className="font-medium" prefetch={false}>
            {post.full_name}
          </Link>
          <p className="text-xs text-muted-foreground">
            <time dateTime="2023-07-06T12:34:56">{post.time}</time>
          </p>
        </div>
      </CardHeader>
      {post.files && (
        <CardContent className="p-4 space-y-4">
          <PostCarousel files={post.files} />
        </CardContent>
      )}

      <CardFooter className="p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Like likesNumber={post.likes_counter} postId={post.id} />

            <Button
              variant="ghost"
              size="icon"
              title="Comment"
              onClick={handleCommentClick}
            >
              <MessageCircleIcon className="w-4 h-4" />
              <span className="sr-only">Comment</span>
              <span className="ml-1 text-sm text-muted-foreground">
                {post.comments_counter}
              </span>
            </Button>
            <SavePost postId={post.id} />
          </div>
        </div>
      </CardFooter>
      <CardContent className="p-4 space-y-4">
        {post.comments && showComment && (
          <>
            <CommentList
              comments={post.comments}
              onReplyClick={handleReplyClick}
            />
            {replyingToCommentId ? (
              <ReplyOnPost commentId={replyingToCommentId} />
            ) : (
              <Comment postId={post.id} />
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CommunityPostCard;

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

function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

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

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}
