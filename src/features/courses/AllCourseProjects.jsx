import { useGet } from "@/cache/reactquery/useGet";
import Spinner from "@/components/global/Spinner";
import { useParams } from "react-router-dom";
import CourseProjectCard from "./CourseProjectCard";

const AllCourseProjects = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGet(
    "all course projects",
    `/course/projects/get/${id}`,
    {}
  );
  if (isLoading) return <Spinner />;
  if (!data) return <div>no courses</div>;
  if (error) return <div>error</div>;
  return (
    <div className="container px-4 py-12 mx-auto md:px-6">
      <h1 className="mb-8 text-3xl font-bold">Course Projects</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {data.projects.map((project) => (
          <CourseProjectCard key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default AllCourseProjects;
