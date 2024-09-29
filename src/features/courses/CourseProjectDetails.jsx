import { useGet } from "@/cache/reactquery/useGet";
import Spinner from "@/components/global/Spinner";
import { useParams } from "react-router-dom";
import CourseProjectDetailsLayout from "./CourseProjectDetailsLayout";
import Layout from "@/components/layout/Layout";
import { CoursesSkeletonCard } from "@/components/global/skeleton/CoursesSkeleton";
import WavyText from "@/components/magicui/WavyText";

const CourseProjectDetails = () => {
  const { projectId } = useParams();
  const { data, isLoading, error } = useGet(
    `course project details ${projectId}}`,
    `/course/projects/get/details/${projectId}`,
    {}
  );
  if (isLoading) return <CoursesSkeletonCard />;
  if (!data) return <div>no courses</div>;
  if (error) return <div>error</div>;
  console.log(data.project);
  return (
    <Layout>
      <div className="py-32">
        <WavyText
          word=" Project Details"
          className="font-bold text-white text-7xl dark:text-white"
        />
        <CourseProjectDetailsLayout
          key={data.project.id}
          project={data.project}
        />
      </div>
    </Layout>
  );
};

export default CourseProjectDetails;
