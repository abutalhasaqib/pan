import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import styles from "./Paginations.module.sass";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage === lastPage) {
      return;
    }
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) {
      return;
    }
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={classnames(styles.pagination, { [className]: className })}>
      <li
        className={classnames(styles.item, {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={classnames(styles.arrow, styles.left)} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className={classnames(styles.item, styles.dots)}>&#8230;</li>
          );
        }

        return (
          <>
            {pageNumber === currentPage ? (
              <li
                className={classnames(styles.item, styles.selected)}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            ) : (
              <li
                className={classnames(styles.item)}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            )}
          </>
        );
      })}
      <li
        className={classnames(styles.item, {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={classnames(styles.arrow, styles.right)} />
      </li>
    </ul>
  );
};

export default Pagination;
