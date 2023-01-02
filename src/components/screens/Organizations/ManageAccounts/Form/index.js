import React, { useEffect, useState } from "react";
import cn from "classnames";
import Dropdown from "../../../../Dropdown";
import TextInput from "../../../../TextInput";
import styles from "./Form.module.sass";

const statusTypes = ["active", "inactive", "deleted"];
const accountTypes = ["Txn Using Api", "Txn Using Portal"];

const Form = ({ data, isEdit }) => {
  const [statuses, setStatuses] = useState(statusTypes[0]);
  const [accType, setAccType] = useState(accountTypes[0]);
  const [values, setValues] = useState({});

  useEffect(() => {
    if (data && data.accountId) {
      setValues(data);
      if (data.accountType === "1") {
        setAccType(accountTypes[0]);
      } else if (data.accountType === "2") {
        setAccType(accountTypes[1]);
      }
      if (data.walletSettings && data.walletSettings.status === "0") {
        setStatuses(statusTypes[0]);
      } else if (data.walletSettings && data.walletSettings.status === "1") {
        setStatuses(statusTypes[1]);
      } else if (data.walletSettings && data.walletSettings.status === "2") {
        setStatuses(statusTypes[2]);
      }
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Account Name"
              name="accountName"
              type="text"
              tooltip="This field is required"
              required
              value={values.accountName ? values.accountName : ""}
            />
          </div>
          <div className={styles.rowField}>
            <Dropdown
              className={styles.field}
              label="Account Type"
              tooltip="This field is required"
              value={accType}
              setValue={setAccType}
              options={accountTypes}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Address"
              name="address"
              type="text"
              tooltip="This field is required"
              required
              value={values.address ? values.address : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="City"
              name="city"
              type="text"
              tooltip="This field is required"
              required
              value={values.city ? values.city : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="State"
              name="state"
              type="text"
              tooltip="This field is required"
              required
              value={values.state ? values.state : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Country"
              name="country"
              type="text"
              tooltip="This field is required"
              required
              value={values.country ? values.country : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Pin Code"
              name="pinCode"
              type="text"
              tooltip="This field is required"
              required
              value={values.pinCode ? values.pinCode : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Mpoc Name"
              name="mpocName"
              type="text"
              tooltip="This field is required"
              required
              value={values.mpocName ? values.mpocName : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Mpoc Designation"
              name="mpocDesignation"
              type="text"
              tooltip="This field is required"
              required
              value={values.mpocDesignation ? values.mpocDesignation : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Mpoc Email"
              name="mpocEmail"
              type="text"
              tooltip="This field is required"
              required
              value={values.mpocEmail ? values.mpocEmail : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Mpoc Contact"
              name="mpocContact"
              type="text"
              tooltip="This field is required"
              required
              value={values.mpocContact ? values.mpocContact : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Tpoc Name"
              name="tpocName"
              type="text"
              tooltip="This field is required"
              required
              value={values.tpocName ? values.tpocName : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Tpoc Designation"
              name="tpocDesignation"
              type="text"
              tooltip="This field is required"
              required
              value={values.tpocDesignation ? values.tpocDesignation : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Tpoc Email"
              name="tpocEmail"
              type="text"
              tooltip="This field is required"
              required
              value={values.tpocEmail ? values.tpocEmail : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Tpoc Contact"
              name="tpocContact"
              type="text"
              tooltip="This field is required"
              required
              value={values.tpocContact ? values.tpocContact : ""}
            />
          </div>
          <div className={styles.rowField}>
            Wallet Settings
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Account Balance"
              name="accountBalance"
              type="text"
              tooltip="This field is required"
              required
              value={values.walletSettings ? values.walletSettings.accountBalance : ""}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Valid till"
              name="validTill"
              type="date"
              tooltip="This field is required"
              required
              value={values.walletSettings ? values.walletSettings.validTill : ""}
            />
          </div>
          <div className={styles.rowField}>
            <Dropdown
              className={styles.field}
              label="Status"
              tooltip="This field is required"
              value={statuses}
              setValue={setStatuses}
              options={statusTypes}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Remarks"
              name="remarks"
              type="text"
              value={values.walletSettings ? values.walletSettings.remarks : ""}
              placeHolder="Enter Remarks"
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={cn("button", styles.button)}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
