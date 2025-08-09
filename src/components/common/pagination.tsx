import React, { useRef } from "react";

const LIMIT = 10;

interface PaginationProps {
  params: { totalRecords: number, currentPage: number; },
  filters?: { type: any; };
  showCreateBtn?: { type: boolean; },
  showSearch?: { type: boolean; },
  onChange: (params: { currentPageNum: number, searchText: string; }) => void;
  onButtonClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ onChange, onButtonClick, params, showCreateBtn = true, showSearch = true }): JSX.Element => {
  const pageSize = LIMIT;
  const currentPage = params.currentPage;
  const disablePrev = params.currentPage === 1;
  const totalPageNum = Math.ceil(params.totalRecords / pageSize);
  const disableNext = params.currentPage >= totalPageNum;
  const pageInfo = `${params.currentPage} of ${totalPageNum}`;
  const searchText = useRef('');

  const paginate = (
    currentPageNumber: number,
    maxPages: number = 5,
    recordsPerPage: number = LIMIT,
  ) => {
    // calculate total pages
    let totalPages = Math.ceil(params.totalRecords / recordsPerPage);
    // ensure current page isn't out of range
    if (currentPageNumber < 1) {
      currentPageNumber = 1;
    } else if (currentPageNumber > totalPages) {
      currentPageNumber = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPageNumber <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1;
        endPage = maxPages;
      } else if (currentPageNumber + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        // current page somewhere in the middle
        startPage = currentPageNumber - maxPagesBeforeCurrentPage;
        endPage = currentPageNumber + maxPagesAfterCurrentPage;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPageNumber - 1) * recordsPerPage;
    let endIndex = Math.min(startIndex + recordsPerPage - 1, params.totalRecords - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view

    onChange({ currentPageNum: currentPageNumber, searchText: searchText.current });
    return {
      totalItems: params.totalRecords,
      currentPage: currentPageNumber,
      pageSize: recordsPerPage,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  };

  const handlePage = async (value: string) => {
    if (value === 'prev') {
      paginate(currentPage - 1);
    } else if (value === 'next') {
      paginate(currentPage + 1);
    }
  };

  const handleSearch = async (value: string) => {
    searchText.current = value;
    onChange({ currentPageNum: 1, searchText: searchText.current });

  };



  return (
    <div className="flex flex-row items-center justify-center w-full h-full px-4 bg-base-300">
      <div className='flex flex-row items-center w-1/2'>
        {showCreateBtn &&
          <div className="mx-1 !uppercase rounded-md btn btn-primary" onClick={() => { onButtonClick(); }}>Create New</div>
        }
      </div>
      <div className='flex flex-row items-center justify-end w-1/2 h-full'>
        {showSearch &&
          <input type="text" placeholder="Enter 3 letters to search"
            className="w-1/2 input input-bordered input-sm h-[75%] rounded-md bg-white mx-1"
            onChange={(e) => {
              if (e.target.value.length >= 3 || e.target.value.length === 0)
                handleSearch(e.target.value);
            }} />
        }
        <div className="flex flex-row items-center justify-end ">
          <button className={`mx-1 btn btn-neutral`} disabled={disablePrev} onClick={() => handlePage('prev')}>{"<"}</button>
          <label className="mx-2">{pageInfo}</label>
          <button className={`mx-1 btn btn-neutral`} disabled={disableNext} onClick={() => handlePage('next')}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;