import { useGet } from "@/cache/reactquery/useGet";
import FilterButtons from "@/components/global/FilterButtons";
import Spinner from "@/components/global/Spinner";
import Layout from "@/components/layout/Layout";
import usePagination from "@/hooks/usePagination";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TagsList from "./TagsList";
import BlogPostCard from "./BlogPostCard";
import SearchInput from "@/components/global/SearchInput";
import BlogPostForm from "./BlogPostForm";
import { MaxWidthWrapper } from "@/components/hover.dev/utils/MaxWidthWrapper";
import { SectionHeadingSpacing } from "@/components/hover.dev/utils/SectionHeadingSpacing";
import { SectionHeading } from "@/components/hover.dev/utils/SectionHeading";
import { Minigrid } from "@/components/hover.dev/utils/Minigrid";
import { BlogPostCardCode } from "./BlogPostCardCode";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CreateBlogPost from "./CreateBlogPost";
import { CoursesSkeletonCard } from "@/components/global/skeleton/CoursesSkeleton";
import { SplashButton } from "@/components/hover.dev/button/SplashButton";

const AllBlogPosts = () => {
  const { currentPage, handlePageChange } = usePagination(1);
  const [filters, setFilters] = useState({ per_page: 10 });
  const { tagId } = useParams();

  const {
    data: tagsData,
    isLoading: isTagsLoading,
    error: tagsError,
  } = useGet(`all_tags_for_${tagId}`, `/path/get/tags/${tagId}`, {});

  const {
    data: postsData,
    isLoading: isPostsLoading,
    error: postsError,
    refetch: refetchPosts,
  } = useGet(`all_problems_${tagId}`, `/problem/newsfeed`, filters);
  console.log(postsData);
  useEffect(() => {
    refetchPosts();
  }, [filters, currentPage]);

  if (isTagsLoading || isPostsLoading) return <CoursesSkeletonCard />;
  if (!tagsData) return <div>No tags</div>;
  if (tagsError || postsError) return <div>Error</div>;

  const handleTagChange = (selectedTag) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      tags: selectedTag,
    }));
  };
  const handleSearch = (searchQuery) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: searchQuery,
    }));
  };
  return (
    <Layout>
      <>
        <section className="relative min-h-screen pt-32 overflow-hidden border-y border-zinc-700">
          <MaxWidthWrapper className="relative z-20 py-20 md:py-40">
            <SectionHeadingSpacing>
              <SectionHeading persistCenter>
                Explore All Problems
              </SectionHeading>
              <Dialog className="">
                <DialogTrigger asChild className="flex max-w-5xl mx-auto ">
                  <SplashButton
                    variant="outline"
                    className="w-full text-center max-w-40"
                  >
                    Create Problem
                  </SplashButton>
                </DialogTrigger>
                <DialogContent className=" sm:max-w-[425px] md:max-w-[600px] px-5  ">
                  <DialogHeader>
                    <DialogTitle>Create Your Post</DialogTitle>
                    <DialogDescription>
                      Create Your post and lanch it with your community .
                    </DialogDescription>
                  </DialogHeader>
                  <div className="">
                    <BlogPostForm tags={tagsData.tags} />
                  </div>
                </DialogContent>
              </Dialog>
            </SectionHeadingSpacing>
            <div className="flex flex-col items-start justify-between mb-6 md:flex-row md:items-center md:mb-8">
              <SearchInput onSearch={handleSearch} name={"Problem"} />
              <FilterButtons
                options={tagsData?.tags?.map((tag) => ({
                  label: { en: tag.name, ar: tag.name_ar },
                  value: tag.name,
                }))}
                onFilterChange={handleTagChange}
              />
            </div>
            {/* <TagsList tags={tagsData.tags} /> */}
            {/* <span className="block p-3 mx-auto mb-3 text-3xl rounded shadow-md w-fit bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-blue-900">
            <FiZap />
          </span> */}

            <div className="flex flex-wrap gap-4 mx-auto"></div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {/* {postsData?.problems?.map((post) => (
            <BlogPostCard post={post} key={post.id} />
          ))} */}
              {postsData?.problems?.map((post) => (
                <BlogPostCardCode post={post} key={post.id} />
              ))}
            </div>
            {/* <BlogPostForm tags={tagsData.tags} /> */}
          </MaxWidthWrapper>
          <Minigrid />
        </section>
      </>
    </Layout>
  );
};

export default AllBlogPosts;
