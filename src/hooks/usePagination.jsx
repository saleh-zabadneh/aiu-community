import { useState } from "react";

const usePagination = (initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    handlePageChange,
  };
};

export default usePagination;
