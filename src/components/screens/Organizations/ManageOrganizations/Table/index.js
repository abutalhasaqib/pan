import React, { useState, useMemo } from "react";
import styles from "./Table.module.sass";
import Icon from "../../../../Icon";
import Pagination from "../../../../Pagination";
import Modal from "../../../../Modal";
import EditModal from "../EditModal";

const Table = ({ headers, data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleModal, setVisibleModal] = useState(false);
  const [rowData, setRowData] = useState({});

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, pageSize]);

  const onClickEditIcon = (r) => {
    setVisibleModal(true);
    setRowData(r)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles.row}>
          {headers.map((header) => (
            <div className={styles.col} key={header.label}>
              {header.label}
            </div>
          ))}
          <div className={styles.col}>Option</div>
        </div>
        {currentTableData.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.organizationName}</div>
            <div className={styles.col}>{x.city}</div>
            <div className={styles.col}>{x.country}</div>
            <div className={styles.col}>{x.pinCode}</div>
            <div className={styles.col}>{x.email}</div>
            <div className={styles.col}>{x.mobileNo}</div>
            <div className={styles.col}>
              <div
                style={{ width: "50%" }}
                onClick={() => onClickEditIcon(x)}
              >
                <Icon name="edit" />
              </div>
            </div>
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
      <Modal
        outerClassName={styles.outer}
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
        heading={'Edit Organization'}
      >
        <EditModal data={rowData} />
      </Modal>
    </div>
  );
};

export default Table;
