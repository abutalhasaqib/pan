import React, { useState, useMemo } from "react";
import styles from "./Table.module.sass";
import Icon from "../../../../Icon";
import Pagination from "../../../../Pagination";
import Modal from "../../../../Modal";
import TooltipGlobal from "../../../../TooltipGlobal";
import Form from "../Form";
import ManageLicence from "../ManageLicence";

const Table = ({ headers, data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [visibleModalLock, setVisibleModalLock] = useState(false);
  const [rowData, setRowData] = useState({});

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, pageSize]);

  const onClickEditIcon = (r) => {
    setVisibleModalEdit(true);
    setRowData(r);
  };

  const onClickLockIcon = (r) => {
    setVisibleModalLock(true);
  };

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
            <div className={styles.col}>{x.accountId}</div>
            <div className={styles.col}>{x.accountName}</div>
            <div className={styles.col}>{x.accountType}</div>
            <div className={styles.col}>{x.city}</div>
            <div className={styles.col}>{x.mobile}</div>
            <div className={styles.col}>{x.email}</div>
            <div className={styles.col}>{x.walletSettings.status}</div>
            <div className={styles.col} style={{ gap: 5, display: "flex" }}>
              <div
                style={{ width: "50%" }}
                onClick={() => onClickEditIcon(x)}
                data-for={"edit-account"}
                data-tip={"Edit"}
              >
                <Icon name="edit" />
                <TooltipGlobal id={"edit-account"} place={"bottom"} />
              </div>
              <div
                style={{ width: "50%" }}
                onClick={() => onClickLockIcon(x)}
                data-for={"manage-account"}
                data-tip={"Manage Account"}
              >
                <Icon name="lock" />
                <TooltipGlobal id={"manage-account"} place={"bottom"} />
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
        visible={visibleModalEdit}
        onClose={() => setVisibleModalEdit(false)}
        heading={"Edit Account"}
      >
        <Form data={rowData} isEdit={true} />
      </Modal>
      <Modal
        outerClassName={styles.outer}
        visible={visibleModalLock}
        onClose={() => setVisibleModalLock(false)}
        heading={"Manage Licence"}
      >
        <ManageLicence />
      </Modal>
    </div>
  );
};

export default Table;
