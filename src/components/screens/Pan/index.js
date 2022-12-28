import React, { useState } from "react";
import cn from "classnames";
import TooltipGlobal from "../../TooltipGlobal";
import Card from "../../Card";
import TextInput from "../../TextInput";
import Dropdown from "../../Dropdown";
import styles from "./Pan.module.sass";

const genders = ["Male", "Female"];

// type can be new or correction or status
const PanForm = ({ type }) => {
  const [optionsGender, setOptionsGender] = useState(genders[0]);

  if (type === "status") {
    return (
      <div className={styles.row}>
        <div className={styles.col}>
          <Card
            className={styles.card}
            title="Add Details"
            classTitle="title-green"
          >
            <div className={styles.rowField}>
              <TextInput
                className={styles.field}
                label="Acknowledgement Number *"
                name="acknowledgementNumber"
                type="text"
                tooltip="This field is required"
                required
              />
            </div>
            <div className={styles.buttonContainer}>
              <button className={cn("button", styles.button)}>Submit</button>
            </div>
          </Card>
        </div>
        <TooltipGlobal />
      </div>
    );
  }

  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <Card
            className={styles.card}
            title="Add Details"
            classTitle="title-green"
          >
            <div className={styles.rowField}>
              <TextInput
                className={styles.field}
                label="Last Name / Sur Name"
                name="lastName"
                type="text"
                tooltip="This field is required"
                required
              />
            </div>
            <div className={styles.rowField}>
              <TextInput
                className={styles.field}
                label="First Name"
                name="firstName"
                type="text"
              />
            </div>
            <div className={styles.rowField}>
              <TextInput
                className={styles.field}
                label="Date of Birth"
                tooltip="This field is required"
                name="dob"
                type="date"
              />
            </div>
            <div className={styles.rowField}>
              <Dropdown
                className={styles.field}
                label="Gender"
                tooltip="This field is required"
                value={optionsGender}
                setValue={setOptionsGender}
                options={genders}
              />
            </div>
            <div className={styles.rowField}>
              <TextInput
                className={styles.field}
                label="Email ID"
                name="email"
                type="email"
                tooltip="This field is required"
                required
              />
            </div>
            <div className={styles.buttonContainer}>
              <button className={cn("button", styles.button)}>Submit</button>
            </div>
          </Card>
        </div>
      </div>
      <TooltipGlobal />
    </>
  );
};

export default PanForm;
