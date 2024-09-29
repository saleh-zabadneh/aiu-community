import { useGet } from "@/cache/reactquery/useGet";
import Spinner from "@/components/global/Spinner";
import { Empty } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { PathSelection } from "./PathSelection";
import { CodeLoader } from "@/components/hover.dev/loaders/CodeLoader";

const AllPaths = () => {
  const {
    data: pathsData,
    isLoading: pathsDataLoading,
    error: pathsDataError,
    refetch: refetchPaths,
  } = useGet("pathsData", "/path/get");
  if (pathsDataLoading) return <CodeLoader />;
  if (!pathsData) return <Empty resourceName="" />;
  if (pathsDataError) return <div>erro</div>;
  console.log(pathsData);
  return (
    <>
      <PathSelection STEPS={pathsData?.paths} />{" "}
    </>
  );
};

export default AllPaths;
{
  /* {.map((path) => (
        <Link className="p-2" to={`/blog/it/paths/${path.id}`} key={path.id}>
          {path.name}
        </Link> */
}
{
  /* ))} */
}
