import { useGet } from "@/cache/reactquery/useGet";
import CourseCard from "./CourseCard";
import Spinner from "@/components/global/Spinner";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/global/Pagination";
import { useEffect, useState } from "react";
import SearchInput from "@/components/global/SearchInput";
import FilterButtons from "@/components/global/FilterButtons";
import { CoursesSkeletonCard } from "@/components/global/skeleton/CoursesSkeleton";
import Layout from "@/components/layout/Layout";
import WavyText from "@/components/magicui/WavyText";

const AllCourses = () => {
  const { currentPage, handlePageChange } = usePagination(1);
  const [filters, setFilters] = useState({ per_page: 10, page: currentPage });

  const filterOptions = [
    { label: { en: "New", ar: "جديدة" }, value: "new" },
    { label: { en: "Old", ar: "قديمة" }, value: "old" },
    { label: { en: "All", ar: "الكل" }, value: "" },
  ];

  const { data, isLoading, error, refetch } = useGet(
    "all courses",
    "/course/get",
    filters
  );

  useEffect(() => {
    // Update filters whenever currentPage changes
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: currentPage,
    }));
    refetch();
  }, [currentPage, refetch]);

  const handleSearch = (searchTerm) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: searchTerm,
      page: 1, // Reset to first page when searching
    }));
    handlePageChange(1); // Reset to first page when searching
    refetch();
  };

  const handleFilterChange = (plan) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      plan,
      page: 1, // Reset to first page when filtering
    }));
    handlePageChange(1); // Reset to first page when filtering
    refetch();
  };

  if (isLoading) return <CoursesSkeletonCard />;
  if (!data) return <div>No courses available</div>;
  if (error) return <div>Error fetching courses</div>;

  return (
    <Layout>
      <div className="py-44">
        <WavyText
          word="Explore All Courses"
          className="font-bold text-white text-7xl dark:text-white"
        />
        <div className="w-full max-w-6xl px-4 py-8 mx-auto md:px-6 md:py-12">
          <div className="flex flex-col items-start justify-between mb-6 md:flex-row md:items-center md:mb-8">
            <SearchInput onSearch={handleSearch} />
            <FilterButtons
              options={filterOptions}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {data?.courses?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={data?.pagination?.total}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </Layout>
  );
};
export default AllCourses;
