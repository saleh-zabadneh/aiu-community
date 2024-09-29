const Spinner = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      <span className="text-muted-foreground text-sm">Loading...</span>
    </div>
  );
};

export default Spinner;
{
  /* <div className="flex flex-col items-center gap-4">
<div className="flex items-center gap-2">
  <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
  <span className="text-muted-foreground text-sm">Loading...</span>
</div>
<div className="w-16 h-16 rounded-full border-8 border-primary border-t-transparent animate-spin" />
<div className="flex flex-col items-center">
  <div className="w-16 h-16 rounded-full border-8 border-primary border-t-transparent animate-spin" />
  <span className="text-muted-foreground mt-2">Loading...</span>
</div>
<div className="w-16 h-16 rounded-full border-8 border-[#8B5CF6] border-t-transparent animate-spin" />
</div> */
}
