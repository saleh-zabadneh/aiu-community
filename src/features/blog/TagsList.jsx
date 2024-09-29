import Tags from "./Tags";

const TagsList = ({ tags, onTagClick, selectedTags }) => {
  console.log(tags);
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tags
            key={tag.id}
            tag={tag}
            onClick={() => onTagClick(tag)}
            isSelected={selectedTags?.some((t) => t.id === tag.id)}
          />
        ))}
      </div>
    </>
  );
};

export default TagsList;
