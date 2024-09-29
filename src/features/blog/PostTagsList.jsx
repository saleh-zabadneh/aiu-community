import PostTags from "./PostTags";

const PostTagsList = ({ tags }) => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <PostTags key={tag} tag={tag} />
        ))}
      </div>
    </>
  );
};

export default PostTagsList;
