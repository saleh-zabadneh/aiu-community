import { useGet } from "@/cache/reactquery/useGet";
import Spinner from "@/components/global/Spinner";
import { useParams } from "react-router-dom";
import ServiceCardSmall3D from "./ServiceCardSmall3D";
import Layout from "@/components/layout/Layout";
import TypingAnimation from "@/components/magicui/TypingAnimation";
import { CoursesSkeletonCard } from "@/components/global/skeleton/CoursesSkeleton";

const StudentsServicePage = () => {
  const { categoryId } = useParams();
  const {
    data: studentServices,
    isLoading: isStudentServices,
    error: studentServicesError,
  } = useGet(
    `all studient services ${categoryId} `,
    `/service/get/category/${categoryId}`,
    {
      per_page: 10,
    }
  );
  console.log(studentServices);
  if (isStudentServices) return <CoursesSkeletonCard />;
  if (!studentServices) return <div>empty</div>;
  if (studentServicesError) return <div>error</div>;

  return (
    <Layout>
      <div className="py-44">
        <TypingAnimation
          duration={100}
          text={"Explore Services"}
        ></TypingAnimation>
        <div className="grid grid-cols-1 gap-2 mx-auto sm:grid-cols-2 md:grid-cols-3 max-full ">
          {studentServices?.services.map((service) => (
            <ServiceCardSmall3D service={service} key={service.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StudentsServicePage;
