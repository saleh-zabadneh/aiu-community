import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { useState } from "react";

export default function PaginaitonWithShadcn({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex justify-center">
      <Pagination>
        <PaginationContent className="flex flex-wrap justify-center gap-2">
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none"
            />
          </PaginationItem>
          {currentPage <= 2 ? (
            <>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageClick(1)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === 1
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageClick(2)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === 2
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageClick(totalPages - 1)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === totalPages - 1
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {totalPages - 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageClick(totalPages)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === totalPages
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          ) : (
            <>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageClick(1)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === 1
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageClick(2)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === 2
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageClick(currentPage - 1)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === currentPage - 1
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {currentPage - 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageClick(currentPage)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === currentPage
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageClick(currentPage + 1)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === currentPage + 1
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {currentPage + 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageClick(totalPages)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === totalPages
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationNext
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
