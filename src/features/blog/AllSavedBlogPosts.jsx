import { useGet } from "@/cache/reactquery/useGet";
import Pagination from "@/components/global/Pagination";
import usePagination from "@/hooks/usePagination";

const AllSavedBlogPosts = () => {
  const { currentPage, handlePageChange } = usePagination(1);

  const { data, isLoading, error, refetch } = useGet(
    "saved posts",
    "/user/saved-problems",
    {}
  );
  if (isLoading) return <div>loading</div>;
  if (!data) return <div>no problems</div>;
  if (error) return <div>error</div>;
  console.log(data);
  return (
    <>
      <div>
        {data.problems.map((problem) => (
          <div key={problem.id}>{problem.id}</div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={data.pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default AllSavedBlogPosts;
