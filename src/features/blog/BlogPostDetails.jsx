import { useGet } from "@/cache/reactquery/useGet";
import { useParams } from "react-router-dom";
import BlogPostDetailsLayout from "./BlogPostDetailsLayout";
import Layout from "@/components/layout/Layout";

const BlogPostDetails = () => {
  const { postId } = useParams();
  const { data, isLoading, error, refetch } = useGet(
    "blog post details",
    `/problem/get/${postId}`,
    {}
  );
  console.log(data);
  if (isLoading) return <div>loading</div>;
  if (!data) return <div>no problem</div>;
  if (error) return <div>error</div>;
  return (
    <Layout>
      <BlogPostDetailsLayout key={data.problem.id} post={data.problem} />
    </Layout>
  );
};

export default BlogPostDetails;
