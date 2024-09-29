const PostTags = ({ tag }) => {
  return (
    <div
      className={`rounded-md bg-[#515151]  px-3 py-1 text-xs font-medium text-white `}
    >
      {tag}
    </div>
  );
};

export default PostTags;
