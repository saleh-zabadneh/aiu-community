import { useGet } from "@/cache/reactquery/useGet";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/global/Pagination";
import { useState } from "react";
import SearchInput from "@/components/global/SearchInput";
import FilterButtons from "@/components/global/FilterButtons";
import { Skeleton } from "@/components/ui/skeleton";
import Layout from "@/components/layout/Layout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AdvertisementCard from "./AdvertisementCard";
import { CoursesSkeletonCard } from "@/components/global/skeleton/CoursesSkeleton";
import { PaginationContent } from "@/components/ui/pagination";

const AllAdvertisement = () => {
  const { currentPage, handlePageChange } = usePagination(1);
  const [filters, setFilters] = useState({ per_page: 10 });
  const filterOptions = [
    { label: { en: "ITE", ar: "" }, value: "new" },
    { label: { en: "PHR", ar: "" }, value: "" },
    { label: { en: "ARCH", ar: "" }, value: "" },
    { label: { en: "BA", ar: "" }, value: "" },
    { label: { en: "LAW", ar: "" }, value: "" },
    { label: { en: "CIV", ar: "" }, value: "old" },
    { label: { en: "ART", ar: "" }, value: "" },
    { label: { en: "DENT", ar: "" }, value: "" },
  ];
  const filterOptions2 = [
    { label: { en: "Low", ar: "" }, value: "low" },
    { label: { en: "High", ar: "" }, value: "high" },
  ];
  const { data, isLoading, error, refetch } = useGet(
    "all advertisements ",
    "/advertisements",
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
  const handleFilterChange2 = (priority) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priority,
    }));
    refetch();
  };
  const handleFilterChange = (fauclty) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      fauclty,
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
          <div className="w-full max-w-6xl px-4 py-8 mx-auto md:px-6 md:py-12">
            {isLoading ? (
              <CoursesSkeletonCard />
            ) : error ? (
              <div>error</div>
            ) : !data ? (
              <div>Empty</div>
            ) : (
              <>
                <div className="flex flex-col items-start justify-between mb-6 md:flex-row md:items-center md:mb-8">
                  <SearchInput onSearch={handleSearch} name="advertisements" />
                  <FilterButtons
                    options={filterOptions}
                    onFilterChange={handleFilterChange}
                  />
                  <FilterButtons
                    options={filterOptions2}
                    onFilterChange={handleFilterChange2}
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                  {data?.advertisements?.map((advertisement) => (
                    <AdvertisementCard
                      key={advertisement.id}
                      advertisement={advertisement}
                    />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={data?.pagination?.total}
                  onPageChange={handlePageChange}
                />
                <PaginationContent />
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
export default AllAdvertisement;
