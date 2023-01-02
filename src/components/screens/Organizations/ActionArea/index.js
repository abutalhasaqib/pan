import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./ActionArea.modeule.sass";
import TooltipGlobal from "../../../TooltipGlobal";
import clipboard from "./icons/clipboard-icon.svg";
import plus from "./icons/plus-icon.svg";
import csv from "./icons/csv-icon.svg";
import excel from "./icons/excel-icon.svg";
import pdf from "./icons/pdf-icon.svg";
import * as XLSX from "xlsx";
import { CSVLink } from "react-csv";
import Pdf from "react-to-pdf";
// import printer from "./icons/printer-icon.svg";
// import { useReactToPrint } from "react-to-print";

const ExportArea = ({
  headers,
  data,
  className,
  elementRef,
  isAdd,
  onClickAdd,
}) => {
  const [actions, setActions] = useState([
    {
      name: "copy",
      tooltip: "Copy to clipboard",
      svg: clipboard,
    },
    {
      name: "csv",
      tooltip: "Download Csv File",
      svg: csv,
    },
    {
      name: "excel",
      tooltip: "Download Excel File",
      svg: excel,
    },
    {
      name: "pdf",
      tooltip: "Download Pdf File",
      svg: pdf,
    },
    // {
    //   name: "print",
    //   tooltip: "Print Data",
    //   svg: printer,
    // },
  ]);

  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "Syntizen Instant PAN Services.xlsx");
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const copyToClipboard = () => {
    let heading = "";
    headers.forEach((dt) => {
      heading = heading + capitalize(dt.label) + " ";
    });
    let stringToWrite = heading;
    // const keys = Object.keys(obj).map((k) => capitalize(k.toString()));
    data.forEach((dt) => {
      const values = Object.values(dt).map((k) => capitalize(k.toString()));
      stringToWrite = stringToWrite + "\n" + values;
    });
    // const stringToWrite = columnNames.join(" ") + "\n" + values.join(" ");
    navigator.clipboard.writeText(stringToWrite);
  };

  const downloadAction = (name) => {
    if (name === "copy") {
      const temp = [...actions];
      const ind = temp.findIndex((t) => t.name === name);
      if (ind > -1) {
        temp[ind].tooltip = "Copied";
        setActions(temp);
      }
      return copyToClipboard();
    }
    if (name === "excel") {
      return downloadExcel(data);
    }
    if (name === "add") {
      onClickAdd();
    }
  };

  useEffect(() => {
    const temp = [...actions];
    const ind = temp.findIndex((t) => t.name === "copy");
    if (ind > -1) {
      if (temp[ind].tooltip === "Copied") {
        setTimeout(() => {
          temp[ind].tooltip = "Copy to clipboard";
          setActions(temp);
        }, 3000);
      }
    }
  }, [actions]);

  return (
    <div className={cn(className, styles.sorting)}>
      {isAdd && (
        <>
          <button
            className={cn(styles.link)}
            onClick={onClickAdd}
            data-for={"add"}
            data-tip={"Add Account"}
          >
            <img src={plus} alt="add" />
          </button>
          <TooltipGlobal id={"add"} place={"bottom"} />
        </>
      )}
      {actions.map((action, index) => (
        <div key={index}>
          {action.name === "csv" ? (
            <CSVLink
              data={data}
              key={index}
              data-for={action.name}
              data-tip={action.tooltip}
              filename={`Syntizen Instant PAN Services.csv`}
              className={cn(styles.link)}
              headers={headers}
            >
              <img src={action.svg} alt="csv" />
            </CSVLink>
          ) : action.name === "pdf" ? (
            <Pdf
              targetRef={elementRef}
              filename="Syntizen Instant PAN Services.pdf"
              key={index}
            >
              {({ toPdf }) => (
                <img
                  src={action.svg}
                  onClick={toPdf}
                  data-for={action.name}
                  data-tip={action.tooltip}
                  style={{ cursor: "pointer" }}
                  alt="pdf"
                />
              )}
            </Pdf>
          ) : (
            <button
              className={cn(styles.link)}
              onClick={() => downloadAction(action.name)}
              key={index}
              data-for={action.name}
              data-tip={action.tooltip}
            >
              <img src={action.svg} alt="action" />
            </button>
          )}
          <TooltipGlobal id={action.name} place={"bottom"} />
        </div>
      ))}
    </div>
  );
};

export default ExportArea;
