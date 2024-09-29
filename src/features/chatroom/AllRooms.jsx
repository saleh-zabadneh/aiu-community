import Spinner from "@/components/global/Spinner";
import { useParams } from "react-router-dom";
import ChatComponent from "./RoomTest";
import { useGetRoom } from "@/cache/chat/useGetRoom";

const AllRooms = () => {
  //   const { courseId } = useParams();
  const { data, isLoading, error } = useGetRoom(`room 3`, "/room/get/3");
  if (isLoading) return <Spinner />;
  if (!data) return <div>empty</div>;
  if (error) return <div>error</div>;
  console.log(data);
  const { id } = data?.room?.id || 4;
  console.log(id);
  return (
    <div>
      hello
      {/* <ChatComponent roomId={id} /> */}
    </div>
  );
};

export default AllRooms;
