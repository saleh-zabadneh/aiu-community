import { useGet } from "@/cache/reactquery/useGet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Answer = ({ id }) => {
  const { data, isLoading, error, refetch } = useGet(
    "answer details",
    `/answer/get/${id}`,
    {}
  );
  if (isLoading) return <div>loading</div>;
  if (!data) return <div>no problem</div>;
  if (error) return <div>error</div>;
  return (
    <>
      <div className="flex items-start space-x-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="font-medium">Jane Doe</p>
            <p className="text-sm text-muted-foreground">May 16, 2023</p>
          </div>
          <p className="text-muted-foreground">
            Great article! I am excited to start building a component library
            for our team.
          </p>
        </div>
      </div>

      <div>
        <div key={data.answer.id}>{data.answer.id}</div>
      </div>
    </>
  );
};

export default Answer;
