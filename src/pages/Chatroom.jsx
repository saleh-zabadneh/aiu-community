import AllCourses from "@/features/courses/AllCourses";
import { useScrollToTopOnRouteChange } from "@/hooks/useScrollToTopOnRouteChange";

const Chatroom = () => {
  useScrollToTopOnRouteChange();
  return (
    <div>
      ChatRoom Page
      <AllCourses />
    </div>
  );
};

export default Chatroom;
