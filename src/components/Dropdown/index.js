import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Dropdown.module.sass";
import Tooltip from "../Tooltip";

const Dropdown = ({
  className,
  classDropdownHead,
  classDropdownLabel,
  value,
  setValue,
  options,
  label,
  tooltip,
  small,
  upBody,
  choose,
  unkonwnDiv
}) => {
  const [visible, setVisible] = useState(false);

  const handleClick = (value) => {
    setValue(value);
    setVisible(false);
  };

//   const ref = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!ref?.current?.contains(event.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//   }, [ref]);

//   // return <WrappedComponent {...props} open={open} setOpen={setOpen} ref={ref} />;
// };


return (
// <OutsideClickHandler onOutsideClick={() => setVisible(false)} >
  <>
    {label && (
      <div className={cn(styles.label, classDropdownLabel)}>
        {label}{" "}
        {tooltip && (
          <Tooltip
            className={styles.tooltip}
            title={tooltip}
            icon="info"
            place="right"
          />
        )}
      </div>
    )}
    <div
      className={cn(
        styles.dropdown,
        className,
        { [styles.small]: small },
        {
          [styles.active]: visible,
        },
      )}
    >
      <div
        className={cn(styles.head, classDropdownHead)}
        onClick={() => setVisible(!visible)}
      >
        <div className={styles.selection}>{value}</div>
      </div>
      <div className={cn(styles.body, { [styles.bodyUp]: upBody })}>

        {options.map((x, index) => (
          <div
            className={cn(styles.option, {
              [styles.selectioned]: x === value,
            })}
            onClick={() => handleClick(x, index)}
            key={index}
          >
            {x}
          </div>
        ))}
      </div>
    </div>
  </>
  // </OutsideClickHandler>
);
};

export default Dropdown;
