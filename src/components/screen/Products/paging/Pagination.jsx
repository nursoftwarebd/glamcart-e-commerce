"use client"
import Image from "next/image";
import next from "../../../../assets/icons/next.svg";
import previous from "../../../../assets/icons/previous.svg";
import { useState } from "react";

const Pagination =({ totalPages, onPageChange })=> {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="flex items-center gap-5">
        <button
          onClick={goToPreviousPage}
          className="h-[50px] py-3 pr-6 pl-3 bg-white/60 border-[1px] border-grayBorder rounded-[5px] flex items-center justify-center gap-3"
        >
          <Image
            src={previous}
            alt="previous"
            className="w-4 h-4 object-fill"
          />
          <span className="text-lg text-secondary font-semibold leading-6">
            Previous
          </span>
        </button>

        <div className="h-[50px] bg-white/60 border-[1px] border-grayBorder rounded-[5px] flex">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-[60px] h-full border-none outline-none bg-${
                  currentPage === page ? "secondary" : "white"
                } text-${
                  currentPage === page ? "white" : "primary"
                } flex items-center justify-center ${
                  page === 1 ? "rounded-tl-[5px] rounded-bl-[5px]" : ""
                } ${
                  page === totalPages ? "rounded-tr-[5px] rounded-br-[5px]" : ""
                }`}
              >
                <span className="text-lg font-semibold leading-6">{page}</span>
              </button>
            )
          )}
        </div>
        <button
          onClick={goToNextPage}
          className="h-[50px] py-3 pr-3 pl-6 bg-white/60 border-[1px] border-grayBorder rounded-[5px] flex items-center justify-center gap-3"
        >
          <span className="text-lg text-secondary font-semibold leading-6">
            Next
          </span>
          <Image src={next} alt="next" className="w-4 h-4 object-fill" />
        </button>
      </div>
    </>
  );
};
export default Pagination;
