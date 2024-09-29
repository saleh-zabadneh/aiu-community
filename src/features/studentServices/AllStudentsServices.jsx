import { useGet } from "@/cache/reactquery/useGet";
import Spinner from "@/components/global/Spinner";
import { CardScale } from "@/components/hover.dev/card/CardScale";
import Layout from "@/components/layout/Layout";
import ServiceCardSmall3D from "./ServiceCardSmall3D";
import { CoursesSkeletonCard } from "@/components/global/skeleton/CoursesSkeleton";

const AllStudentsServices = () => {
  const {
    data: studentServices,
    isLoading: isStudentServices,
    error: studentServicesError,
  } = useGet(`all studient services `, `/service/get`, { per_page: 10 });
  console.log(studentServices);

  return (
    <Layout>
      <div className="mt-12 md:mt-32">
        <CardScale
          text={"Share Your Talents "}
          text2={"With AIU Community Services"}
          isLearnMore={false}
          createService={true}
        />
      </div>
      {isStudentServices ? (
        <CoursesSkeletonCard />
      ) : studentServicesError ? (
        <div>error</div>
      ) : !studentServices ? (
        <div>empty</div>
      ) : (
        studentServices?.services?.map((service) => (
          <ServiceCardSmall3D key={service.id} service={service} />
        ))
      )}
      {}
    </Layout>
  );
};

export default AllStudentsServices;
