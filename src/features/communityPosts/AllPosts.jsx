import { useGet } from "@/cache/reactquery/useGet";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/global/Pagination";
import { useState } from "react";
import SearchInput from "@/components/global/SearchInput";
import FilterButtons from "@/components/global/FilterButtons";
import CommunityPostCard from "./CommunityPostCard";
import { Skeleton } from "@/components/ui/skeleton";
import Layout from "@/components/layout/Layout";
import CreateCommunityPostForm from "./CreateCommunityPostForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AllPosts = () => {
  const { currentPage, handlePageChange } = usePagination(1);
  const [filters, setFilters] = useState({ per_page: 10 });
  const filterOptions = [
    { label: { en: "Other", ar: "كلية" }, value: "new" },
    { label: { en: "Funny", ar: "قديمة" }, value: "old" },
    { label: { en: "متطلبات", ar: "الكل" }, value: "" },
    { label: { en: "University", ar: "الكل" }, value: "" },
  ];
  const { data, isLoading, error, refetch } = useGet(
    "all community posts",
    "/newsfeed",
    filters
  );

  console.log(data);
  const handleSearch = (searchTerm) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: searchTerm,
    }));
    refetch();
  };

  const handleFilterChange = (plan) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      plan,
    }));
    refetch();
  };
  console.log(data);
  return (
    <>
      <Layout>
        {/* <div
          className="absolute top-0  inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div> */}
        <div className="py-44">
          <Dialog>
            <DialogTrigger asChild className="flex max-w-5xl mx-auto">
              <Button variant="outline" className="w-full">
                Create Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create Your Post</DialogTitle>
                <DialogDescription>
                  Create Your post and lanch it with your community .
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <CreateCommunityPostForm />
              </div>
            </DialogContent>
          </Dialog>

          <div className="w-full max-w-6xl px-4 py-8 mx-auto md:px-6 md:py-12">
            {isLoading ? (
              <Skeleton />
            ) : error ? (
              <div>error</div>
            ) : !data ? (
              <div>Empty</div>
            ) : (
              <>
                <div className="flex flex-col items-start justify-between mb-6 md:flex-row md:items-center md:mb-8">
                  <SearchInput onSearch={handleSearch} />
                  <FilterButtons
                    options={filterOptions}
                    onFilterChange={handleFilterChange}
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                  {data?.posts?.map((post) => (
                    <CommunityPostCard key={post.id} post={post} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={data?.pagination?.totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </div>
          {/* <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div> */}
        </div>
      </Layout>
    </>
  );
};
export default AllPosts;
