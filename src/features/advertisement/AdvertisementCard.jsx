import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AdvertisementCard = ({ advertisement }) => {
  return (
    <Card className="w-full max-w-md transition-colors border rounded-lg border-input hover:border-primary shadow-[8px_9px_249px_45px_rgba(145,_46,_106,_0.26)]">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={advertisement?.image} />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="text-sm font-bold">{advertisement.full_name}</div>
            <div className="text-xs text-muted-foreground">
              {advertisement.time}
            </div>
          </div>
          <div className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md top-2 left-2 bg-primary text-primary-foreground">
            {advertisement.category}
          </div>
          <div className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md top-2 left-2 bg-primary text-primary-foreground">
            Priority : {advertisement.priority}
          </div>
        </div>
        <div className="mt-4 text-sm font-medium text-muted-foreground">
          {advertisement.data}
        </div>
        {advertisement.files && (
          <div className="relative mt-4">
            <img
              src={advertisement?.files[0]}
              alt="Advertisement"
              className="object-cover w-full max-w-full transition-all rounded-lg hover:opacity-90 max-h-36"
            />
          </div>
        )}
        {/* {!"/placeholder.svg" && (
          <div className="relative mt-4">
            <div className="absolute inline-flex items-center px-2 py-1 text-xs font-medium rounded-md top-2 left-2 bg-primary text-primary-foreground">
              Priority : {advertisement.priority}
            </div>
            <div className="mt-4 text-sm font-medium text-muted-foreground">
              {advertisement.data}
            </div>
          </div>
        )} */}
        <div className="mt-4 space-y-2">
          <p className="text-base font-semibold">{advertisement.content}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvertisementCard;
