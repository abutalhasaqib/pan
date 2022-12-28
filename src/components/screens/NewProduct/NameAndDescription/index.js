import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./NameAndDescription.module.sass";
import Card from "../../../../components/Card";
import Icon from "../../../../components/Icon";
import TextInput from "../../../../components/TextInput";

const NameAndDescription = ({ className , navigia}) => {
  const [content, setContent] = useState();

  return (
    <Card
      className={cn(styles.card, className)}
      title="Admin Registration Form"
      classTitle="title-red"
      head={
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to={navigia}
        >
          <Icon name="arrow-left" size="24" />
          <span>Back</span>
        </Link>
      }
    >
      <div className={styles.description}>
        <div className={styles.group}>
          <TextInput
            className={styles.field}
            name="value1"
            type="text"
            placeholder="Name"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            required
          />
          <TextInput
            className={styles.field}
            name="value2"
            type="email"
            placeholder="Email"
            required
          />
          <TextInput
            className={styles.field}
            name="value3"
            type="number"
            placeholder="Mobile"
            required
          />
          <TextInput
            className={styles.field}
            name="value4"
            type="text"
            placeholder="Address"
            required
          />
          <TextInput
            className={styles.field}
            name="value4"
            type="text"
            placeholder="City"
            required
          />
          <TextInput
            className={styles.field}
            name="value4"
            type="text"
            placeholder="State"
            required
          />
          <TextInput
            className={styles.field}
            name="value4"
            type="text"
            placeholder="Pincode"
            required
          />
           <Link className={styles.logo}>
            <button className={cn("button", styles.button)}>Submit</button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default NameAndDescription;
