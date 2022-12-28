import React, { useState } from "react";
import cn from "classnames";
import Dropdown from "../../../../Dropdown";
import TooltipGlobal from "../../../../TooltipGlobal";
import TextInput from "../../../../TextInput";
import styles from "./EditModal.module.sass";

const statusTypes = ["active", "inactive", "deleted"];

const Edit = ({data}) => {
  const {organizationName, address, city, state, country, pinCode, email, mobileNo, phoneNo, status} = data;
  const [statuses, setStatuses] = useState(status);
  console.log({mobileNo, data})

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Organization Name"
              name="organizationName"
              type="text"
              tooltip="This field is required"
              required
              value={organizationName}
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
              value={address}
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
              value={city}
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
              value={state}
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
              value={country}
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
              value={pinCode}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Email"
              name="email"
              type="text"
              tooltip="This field is required"
              required
              value={email}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Mobile Number"
              name="mobileNo"
              type="text"
              tooltip="This field is required"
              required
              value={mobileNo}
            />
          </div>
          <div className={styles.rowField}>
            <TextInput
              className={styles.field}
              label="Phone Number"
              name="phone"
              type="text"
              value={phoneNo}
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
          <div className={styles.buttonContainer}>
            <button className={cn("button", styles.button)}>Submit</button>
          </div>
        </div>
      </div>
      <TooltipGlobal />
    </div>
  );
};

export default Edit;
