import React from "react";
import styles from "./Transactions.module.sass";
import TooltipGlobal from "../../TooltipGlobal";
import Table from "./Table";
import Dropdown from "../../Dropdown";
import { useState } from "react";
import Card from "../../Card";
import cn from "classnames";
import TextInput from "../../TextInput";

const Transactions = () => {


  const items = [
    {
      txnId: 121,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "221010051317197",
      statusCode: "SYN30",
      statusDescription: '{ "ER062": "Invalid Ack-Number" }',
      date: "Thu, 20 Oct 2022 12:49:36 GMT",
      status: "failed",
      timeInMinutes: "0:32",
    },
    {
      txnId: 122,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "221010051317197",
      statusCode: "SYN30",
      statusDescription: "FRM028 - ADV authentication Failed",
      date: "Thu, 20 Oct 2022 12:49:36 GMT",
      status: "failed",
      timeInMinutes: "0:32",
    },
    {
      txnId: 123,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "221010051317198",
      statusCode: "SYN31",
      statusDescription: '{ "ER062": "Invalid Ack-Number" }',
      date: "Thu, 20 Oct 2022 12:49:36 GMT",
      status: "failed",
      timeInMinutes: "0:32",
    },
    {
      txnId: 124,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "221010051317199",
      statusCode: "SYN32",
      statusDescription: "Application is under process at Protean",
      date: "Thu, 15 Oct 2022 12:49:36 GMT",
      status: "pending",
      timeInMinutes: "1:32",
    },
    {
      txnId: 125,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "221010051317107",
      statusCode: "SYN30",
      statusDescription:
        "FRM030 - PAN entered by you is not present in Income Tax Department Database. You are requested to check after two days if PAN has been recently allotted by ITD else, please forward copy of PAN card at tininfo@nsdl.co.in.",
      date: "Thu, 10 Oct 2022 12:49:36 GMT",
      status: "failed",
      timeInMinutes: "3:32",
    },
    {
      txnId: 128,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "2210100513175207",
      statusCode: "SYN20",
      statusDescription: "Application is under process at NSDL eGOV",
      date: "Thu, 15 Oct 2022 12:49:36 GMT",
      status: "success",
      timeInMinutes: "2:32",
    },
    {
      txnId: 128,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "2210100513175207",
      statusCode: "SYN20",
      statusDescription: "Application is under process at NSDL eGOV",
      date: "Thu, 15 Oct 2022 12:49:36 GMT",
      status: "success",
      timeInMinutes: "2:32",
    },
    {
      txnId: 128,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "2210100513175207",
      statusCode: "SYN20",
      statusDescription: "Application is under process at NSDL eGOV",
      date: "Thu, 15 Oct 2022 12:49:36 GMT",
      status: "success",
      timeInMinutes: "2:32",
    },
    {
      txnId: 128,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "2210100513175207",
      statusCode: "SYN20",
      statusDescription: "Application is under process at NSDL eGOV",
      date: "Thu, 15 Oct 2022 12:49:36 GMT",
      status: "success",
      timeInMinutes: "2:32",
    },
    {
      txnId: 128,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "2210100513175207",
      statusCode: "SYN20",
      statusDescription: "Application is under process at NSDL eGOV",
      date: "Thu, 15 Oct 2022 12:49:36 GMT",
      status: "success",
      timeInMinutes: "2:32",
    },
    {
      txnId: 128,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "2210100513175207",
      statusCode: "SYN20",
      statusDescription: "Application is under process at NSDL eGOV",
      date: "Thu, 15 Oct 2022 12:49:36 GMT",
      status: "success",
      timeInMinutes: "2:32",
    },
    {
      txnId: 128,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "2210100513175207",
      statusCode: "SYN20",
      statusDescription: "Application is under process at NSDL eGOV",
      date: "Thu, 15 Oct 2022 12:49:36 GMT",
      status: "success",
      timeInMinutes: "2:32",
    },
    {
      txnId: 128,
      accountName: "syntizen testing",
      userName: "syntizen",
      RRN: "2210100513175207",
      statusCode: "SYN20",
      statusDescription: "Application is under process at NSDL eGOV",
      date: "Thu, 15 Oct 2022 12:49:36 GMT",
      status: "success",
      timeInMinutes: "2:32",
    },
  ];

  const intervals = ["All Accounts", "Syntizen Testing"];

  const [sorting, setSorting] = useState(intervals[0])
  const [handleTable, setHandleTable] = useState(false)


  return (
    <>
      <div className={styles.section}>
        <Card
          className={cn(styles.card, styles.cus_card)}
          children={
            <div className={cn(styles.setup_dropd)}>
              <>
                <Dropdown
                  className={cn(styles.cus_dropDown)}
                  classDropdownHead={styles.cus_dropdownHead}
                  value={sorting}
                  setValue={setSorting}
                  options={intervals}
                  small
                />
                <TextInput
                  className={cn(styles.field, styles.cus_input)}
                  name="value4"
                  type="date"
                  placeholder="Start Date"
                  required
                />
                <TextInput
                  className={cn(styles.field, styles.cus_input)}
                  name="value4"
                  type="date"
                  placeholder="End Date"
                  required
                />
                <button type="button" className={cn("button-square")} onClick={() => setHandleTable(!handleTable)}>
                  Submit
                </button>
              </>
            </div>
          }
        />
        {handleTable && <Table data={items} pageSize={5} />}
        <TooltipGlobal />
      </div>
    </>
  );
};

export default Transactions;
