const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPaginationItems = () => {
    const items = [];
    console.log(currentPage, totalPages);
    // Previous button
    items.push(
      <li key="prev">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) onPageChange(currentPage - 1);
          }}
          className={`flex items-center space-x-1 font-medium ${
            currentPage === 1 ? "text-gray-400" : "hover:text-blue-600"
          }`}
          aria-label="Previous Page"
          tabIndex={currentPage === 1 ? -1 : 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    );

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1) ||
        i === 2 ||
        i === totalPages - 1
      ) {
        items.push(
          <li key={i}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(i);
              }}
              className={`px-2 text-lg font-medium sm:px-3 ${
                i === currentPage
                  ? "rounded-md border-2 border-background text--accent"
                  : "hover:text--secondary-foreground"
              }`}
              aria-label={i === currentPage ? "Current Page" : null}
            >
              {i}
            </a>
          </li>
        );
      } else if (
        (i === 3 && currentPage > 4) ||
        (i === totalPages - 2 && currentPage < totalPages - 3)
      ) {
        items.push(
          <li key={i}>
            <span
              className="px-2 text-lg font-medium text-gray-400 sm:px-3"
              aria-hidden="true"
            >
              ...
            </span>
            <span className="sr-only">Skipping Pages</span>
          </li>
        );
      }
    }

    // Next button
    items.push(
      <li key="next">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) onPageChange(currentPage + 1);
          }}
          className={`flex justify-center items-center space-x-1 font-medium ${
            currentPage === totalPages
              ? "text-gray-400"
              : "hover:text-secondary-foreground"
          }`}
          aria-label="Next Page"
          tabIndex={currentPage === totalPages ? -1 : 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 "
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    );

    return items;
  };

  return (
    <nav
      aria-label="Page Navigation"
      className="flex items-center justify-between max-w-md py-2 mx-auto my-10 space-x-2 rounded-md"
    >
      <ul className="flex items-center justify-between w-full">
        {getPaginationItems()}
      </ul>
    </nav>
  );
};

export default Pagination;
