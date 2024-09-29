import BarLoaderUsage from "@/components/global/BarLoader";
import { lazy, Suspense } from "react";

/**
 * Custom hook to dynamically import a component with support for both default and named exports.
 * @param {Function} importFunc - The function to dynamically import a component.
 * @param {string} [exportName] - The named export to use. If not provided, default export is used.
 */

const useLazyLoad = (importFunc, exportName) => {
  const Component = lazy(() =>
    importFunc().then((module) => ({
      default: exportName ? module[exportName] : module.default,
    }))
  );

  return function LazyLoadedComponent(props) {
    return (
      <Suspense fallback={<BarLoaderUsage />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default useLazyLoad;
