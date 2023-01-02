import React, {useState, useMemo} from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import Pagination from "../../../Pagination";



const Table = ({data, pageSize}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, pageSize]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>Status</div>
          <div className={styles.col}>TxnId</div>
          <div className={styles.col}>Account Name</div>
          <div className={styles.col}>User Name</div>
          <div className={styles.col}>RRN</div>
          <div className={styles.col}>Status Code</div>
          <div className={styles.col}>Status Description</div>
          <div className={styles.col}>Date</div>
          <div className={styles.col}>Total Txn Time (in minutes) </div>
        </div>
        {currentTableData.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>
              {x.status === "success" ? (
                <div
                  className={cn(
                    { "status-green-dark": x.status === "success" },
                    styles.status
                  )}
                >
                  {x.status}
                </div>
              ) : x.status === "failed" ? (
                <div
                  className={cn(
                    { "status-red": x.status === "failed" },
                    styles.status
                  )}
                >
                  {x.status}
                </div>
              ) : (
                <div
                  className={cn(
                    { "status-yellow": x.status === "pending" },
                    styles.status
                  )}
                >
                  {x.status}
                </div>
              )}
            </div>
            <div className={styles.col}>{x.txnId}</div>

            <div className={styles.col}>{x.accountName}</div>
            <div className={styles.col}>{x.userName}</div>
            <div className={styles.col}>{x.RRN}</div>

            <div className={styles.col}>{x.statusCode}</div>
            <div className={styles.col}>{x.statusDescription}</div>
            <div className={styles.col}>{x.date}</div>
            <div className={styles.col}>{x.timeInMinutes}</div>
          </div>
        ))}
      </div>
      <Pagination
        className={styles.paginationBar}
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Table;
