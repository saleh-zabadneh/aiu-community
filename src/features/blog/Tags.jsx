const Tags = ({ tag, onClick, isSelected }) => {
  return (
    <div
      className={`rounded-md bg-[#515151] cursor-pointer px-3 py-1 text-xs font-medium text-white ${
        isSelected ? "ring-2 ring-offset-2 ring-black" : ""
      }`}
      // style={{
      //   backgroundColor: tag.bg,
      //   ":hover": { backgroundColor: tag.hover_bg },
      // }}
      onClick={onClick}
    >
      {tag.name}
    </div>
  );
};

export default Tags;
// F7DF1E
// 3776AB
// 563D7C
// 239120
