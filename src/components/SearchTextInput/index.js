import React from "react";
import styles from "./SearchTextInput.module.sass";
import Icon from "../Icon";
import cn from "classnames";

const SearchInputField = ({
  className,
  placeholder,
  value,
  type,
  name,
  icon,
  onChange,
}) => {
  return (
    <div className={cn(className, styles.form)}>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        required
      />
      <button className={styles.result}>
        <Icon name={icon} size="24" />
      </button>
    </div>
  );
};

export default SearchInputField;
