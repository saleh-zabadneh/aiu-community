import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import AllCourses from "./features/courses/AllCourses";
import AllCourseFolders from "./features/courses/AllCourseFolders";
import CourseFolderDetails from "./features/courses/CourseFolderDetails";
import CourseProjectDetails from "./features/courses/CourseProjectDetails";
import VoiceGenerationLayout from "./features/voiceGeneration/VoiceGenerationLayout";
import Blog from "./pages/Blog";
import AllPaths from "./features/blog/AllPaths";
import AllSecondPaths from "./features/blog/AllSecondPaths";
import AllBlogPosts from "./features/blog/AllBlogPosts";
import AllStudentsServices from "./features/studentServices/AllStudentsServices";
import StudentsServicePage from "./features/studentServices/StudentsServicePage";
import StudentServicesDetails from "./features/studentServices/StudentServicesDetails";
import ContactUs from "./pages/ContactUs";
import BlogPostDetailsCode from "./features/blog/BlogPostDetailsCode";
import Ro from "./features/chatroom/Ro";
import AllPosts from "./features/communityPosts/AllPosts";
import CommunityPostDetails from "./features/communityPosts/CommunityPostDetails";
import AllAdvertisement from "./features/advertisement/AllAdvertisement";
import DevTeam from "./pages/DevTeam";
import GenerateLecture from "./features/voiceGeneration/GenerateLecture";
import ChatbotLayout from "./features/chatbot/ChatbotLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="signup" element={<Signup />} />
          <Route path="team" element={<DevTeam />} />

          {/* informatic engineering */}
          <Route path="students/it/courses" element={<AllCourses />} />
          <Route
            path="students/it/courses/folders/:courseId"
            element={<AllCourseFolders />}
          />
          <Route
            path="students/it/courses/folders/lectures/:folderId"
            element={<CourseFolderDetails />}
          />
          <Route
            path="students/it/courses/projects/:projectId"
            element={<CourseFolderDetails />}
          />
          <Route
            path="students/it/courses/projects/project-details/:projectId"
            element={<CourseProjectDetails />}
          />
          {/* blog */}
          <Route path="blog/it/paths" element={<AllPaths />} />
          <Route path="blog/it/paths/:pathId" element={<AllSecondPaths />} />
          <Route path="blog/it" element={<Blog />} />
          <Route
            path="blog/it/paths/:pathId/:tagId/posts"
            element={<AllBlogPosts />}
          />
          <Route
            path="blog/it/posts/:postId"
            element={<BlogPostDetailsCode />}
          />
          {/* voice generation  */}
          <Route path="voice-generation" element={<VoiceGenerationLayout />} />
          <Route
            path="voice-generation/generate"
            element={<GenerateLecture />}
          />
          {/* chatroom */}
          <Route path="ro" element={<Ro />} />
          {/* <Route path="chatroom" element={<Chatroom />} /> */}
          {/* chatbot */}
          <Route path="chatbot/room" element={<ChatbotLayout />} />
          {/* services */}
          <Route
            path="students/services/all-category"
            element={<AllStudentsServices />}
          />
          <Route
            path="students/services/all-category/:categoryId"
            element={<StudentsServicePage />}
          />
          <Route
            path="students/services/all-category/:categoryId/:serviceId"
            element={<StudentServicesDetails />}
          />
          {/* Community */}
          <Route path="community/posts" element={<AllPosts />} />
          <Route
            path="community/posts/:postId"
            element={<CommunityPostDetails />}
          />
          {/*Advertisements*/}
          <Route path="advertisements" element={<AllAdvertisement />} />
          <Route
            path="advertisements/:advertisementId"
            element={<CommunityPostDetails />}
          />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-background-light)",
            color: "var(--color-text)",
          },
        }}
      />
    </>
  );
};

export default App;
