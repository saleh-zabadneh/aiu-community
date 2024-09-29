import { useEffect } from "react";

export function useScrollToTopOnRouteChange() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
