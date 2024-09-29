import { useState } from "react";

export function useCommenting(initialComments) {
  const [comments, setComments] = useState(initialComments);
  const [replyTo, setReplyTo] = useState(null);

  const handleReply = (commentId) => {
    setReplyTo(commentId);
  };

  const handleCancelReply = () => {
    setReplyTo(null);
  };

  const handleSubmitReply = (text) => {
    if (!text.trim()) return;

    const newComment = {
      id: comments.length + 1,
      avatar: "/placeholder-user.jpg",
      initials: "XX",
      author: "New User",
      time: new Date().toISOString(),
      timeAgo: "Just now",
      text,
    };

    if (replyTo === null) {
      setComments([...comments, newComment]);
    } else {
      const updatedComments = comments.map((comment) =>
        comment.id === replyTo
          ? { ...comment, replies: [...(comment.replies || []), newComment] }
          : comment
      );
      setComments(updatedComments);
    }

    setReplyTo(null);
  };

  return {
    comments,
    replyTo,
    handleReply,
    handleCancelReply,
    handleSubmitReply,
  };
}
