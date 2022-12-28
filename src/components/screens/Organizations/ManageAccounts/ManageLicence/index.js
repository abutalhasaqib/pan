import React, { useState } from "react";
import cn from "classnames";
import TextInput from "../../../../TextInput";
import styles from "./ManageLicence.module.sass";

const ManageLicenences = () => {
  const [data] = useState([
    {
      licenceKey: "LXCRN-XXXXX-XXXXX-TAFXL",
      validity: "999",
      remainingDays: "903",
      expiryDate: "	4/16/2025 8:20:19 PM",
      generatedDate: "7/22/2022 8:20:19 PM",
      status: "Active",
    },
  ]);

  const headers = [
    {
      label: "Licence Key",
      key: "licenceKey",
    },
    {
      label: "Validity",
      key: "validity",
    },
    {
      label: "Remaining Days",
      key: "remainingDays",
    },
    {
      label: "Expiry Date",
      key: "expiryDate",
    },
    {
      label: "Generated Date",
      key: "generatedDate",
    },
    {
      label: "Status",
      key: "status",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Validity"
              name="validity"
              type="text"
              tooltip="This field is required"
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={cn("button", styles.button)}>
              Generate Licence
            </button>
          </div>
          <div className={styles.rowField} style={{ marginTop: 30 }}>
            Current Licence Details
          </div>
          <div className={styles.wrapper}>
            <div className={styles.table}>
              <div className={styles.rowTable}>
                {headers.map((header) => (
                  <div className={styles.colTable} key={header.label}>
                    {header.label}
                  </div>
                ))}
                <div className={styles.colTable}>Options</div>
              </div>
              {data.map((x, index) => (
                <div className={styles.rowTable} key={index}>
                  <div className={styles.colTable}>{x.licenceKey}</div>
                  <div className={styles.colTable}>{x.validity}</div>
                  <div className={styles.colTable}>{x.remainingDays}</div>
                  <div className={styles.colTable}>{x.expiryDate}</div>
                  <div className={styles.colTable}>{x.generatedDate}</div>
                  <div className={styles.colTable}>{x.status}</div>
                  <div className={styles.colTable}>
                    <div className={styles.buttonContainer}>
                      <button className={cn("button", styles.button1)}>
                        Activate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageLicenences;
