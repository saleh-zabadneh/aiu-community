import { useGet } from "@/cache/reactquery/useGet";
import Spinner from "@/components/global/Spinner";
import { useParams } from "react-router-dom";
import StudentServiceDetailsCard from "./StudentServiceDetailsCard";
import Layout from "@/components/layout/Layout";

const StudentServicesDetails = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  const {
    data: studentServiceDetails,
    isLoading: isLoadingStudentServiceDetails,
    error: StudentServiceDetailsError,
  } = useGet(
    ` studient service details ${serviceId} `,
    `/service/get/${serviceId}`,
    { per_page: 10 }
  );
  console.log(studentServiceDetails);
  if (isLoadingStudentServiceDetails) return <Spinner />;
  if (!studentServiceDetails) return <div>empty</div>;
  if (StudentServiceDetailsError) return <div>error</div>;

  return (
    <Layout>
      <div className="py-44">
        <div className="max-w-2xl mx-auto ">
          <StudentServiceDetailsCard service={studentServiceDetails.service} />
        </div>
      </div>
    </Layout>
  );
};

export default StudentServicesDetails;
