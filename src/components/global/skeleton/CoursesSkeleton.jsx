import Layout from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";

export function CoursesSkeletonCard() {
  return (
    <Layout>
      <div className="flex items-center justify-center gap-5 py-44">
        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 max-w-7xl">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
