import { useGet } from "@/cache/reactquery/useGet";
import Spinner from "@/components/global/Spinner";
import { useParams } from "react-router-dom";
import CourseFolderCard from "./CourseFolderCard";
import Layout from "@/components/layout/Layout";
import CourseProjectCard from "./CourseProjectCard";
import { CoursesSkeletonCard } from "@/components/global/skeleton/CoursesSkeleton";
import TypingAnimation from "@/components/magicui/TypingAnimation";

const AllCourseFolders = () => {
  const { courseId } = useParams();
  const { data, isLoading, error } = useGet(
    `all course folders ${courseId}`,
    `/course/folders/get/${courseId}`,
    {}
  );
  const {
    data: projectsData,
    isLoading: projectsIsLoading,
    error: projectsError,
  } = useGet("all course projects", `/course/projects/get/${courseId}`, {});
  if (isLoading || projectsIsLoading) return <CoursesSkeletonCard />;
  if (!data) return <div>no courses</div>;
  if (error || projectsError) return <div>error</div>;
  console.log(projectsData);
  console.log(data);
  return (
    <Layout>
      <div className="py-24">
        <section className="w-full py-12 md:py-16 lg:py-20 ">
          <TypingAnimation
            text={"Explore All Course Folders "}
            duration={100}
          />
          <div className="container grid gap-6 px-4 md:gap-8 md:px-6">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
              <h1 className="text-2xl font-bold tracking-tight">
                Course Folders :
              </h1>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {data.folders.map((folder) => (
                <CourseFolderCard key={folder.id} folder={folder} />
              ))}
            </div>
          </div>
          <div className="container grid gap-6 px-4 py-24 md:gap-8 md:px-6">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
              <h1 className="text-2xl font-bold tracking-tight">
                Course Projcets :
              </h1>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {projectsData.projects.map((project) => (
                <CourseProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default AllCourseFolders;
