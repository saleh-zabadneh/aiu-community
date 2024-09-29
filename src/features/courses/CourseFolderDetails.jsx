import { useGet } from "@/cache/reactquery/useGet";
import { useParams } from "react-router-dom";
import CourseDetailsCard from "./CourseDetailsCard";
import Layout from "@/components/layout/Layout";
import { CoursesSkeletonCard } from "@/components/global/skeleton/CoursesSkeleton";

const CourseFolderDetails = () => {
  const { folderId } = useParams();
  const { data, isLoading, error, refetch } = useGet(
    `course folder details ${folderId}`,
    `/course/folders/get/details/${folderId}`,
    {}
  );
  if (isLoading) return <CoursesSkeletonCard />;
  if (!data) return <div>no courses</div>;
  if (error) return <div>error</div>;
  return (
    <Layout>
      <div className="py-32 ">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Course Details</h1>
            <p className="text-muted-foreground">
              Explore the assets associated with this course.
            </p>
          </div>
          <CourseDetailsCard key={data.folder.id} courseData={data.folder} />
        </div>
      </div>
    </Layout>
  );
};

export default CourseFolderDetails;
