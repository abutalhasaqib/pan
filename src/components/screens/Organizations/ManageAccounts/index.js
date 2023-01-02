import React, { useState, useRef } from "react";
import cn from "classnames";
import styles from "./ManageAccounts.module.sass";
import Card from "../../../Card";
import SearchTextInput from "../../../SearchTextInput";
import Modal from "../../../Modal";
import ActionArea from "../ActionArea";

import Form from "./Form";
import Table from "./Table";

const ManageAccounts = () => {
  const [search, setSearch] = useState("");
  const [visibleModalAdd, setVisibleModalAdd] = useState(false);
  const pdfAreaRef = useRef(null);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const data = [
    {
      accountId: "1",
      accountName: "Syntizen testing",
      accountType: "1",
      address: "Office No: 806 Manjeera Majestic Commercial",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pinCode: "500085",
      mpocName: "Balram",
      mpocDesignation: "Developer",
      mpocEmail: "balram.singh@syntizen.com",
      mpocContact: "9603445061",
      tpocName: "Balram",
      tpocDesignation: "Developer",
      tpocEmail: "balram.singh@syntizen.com",
      tpocContact: "9603445061",
      walletSettings: {
        accountBalance: "2856.00",
        validTill: "12/01/2024",
        status: "1",
        remarks: "",
      },
      mobile: "9603445061",
      email: "balram.singh@syntizen.com",
    },
    {
      accountId: "2",
      accountName: "Syntizen aws testing",
      accountType: "2",
      address: "Kukatpally",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pinCode: "500012",
      mpocName: "Balram",
      mpocDesignation: "Developer",
      mpocEmail: "balramsingh@gmail.com",
      mpocContact: "9603445061",
      tpocName: "balramsignh",
      tpocDesignation: "Software",
      tpocEmail: "balram.singh@syntizen.com",
      tpocContact: "9603445061",
      walletSettings: {
        accountBalance: "2856.00",
        validTill: "12/01/2024",
        status: "1",
        remarks: "",
      },
      mobile: "9603445061",
      email: "balram.singh@syntizen.com",
    },
    {
      accountId: "7",
      accountName: "branch x",
      accountType: "2",
      address: "Kukatpally",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pinCode: "400029",
      mpocName: "Athira murali",
      mpocDesignation: "Senior communication manager",
      mpocEmail: "athira@branchx.com",
      mpocContact: "9970581474",
      tpocName: "Spurthi Gowda",
      tpocDesignation: "Senior System Architect",
      tpocEmail: "spurthi@branchx.in",
      tpocContact: "9970581474",
      walletSettings: {
        accountBalance: "3000.00",
        validTill: "08/30/2024",
        status: "1",
        remarks: "",
      },
      mobile: "9603445061",
      email: "balram.singh@syntizen.com",
    },
    {
      accountId: "2",
      accountName: "Syntizen aws testing",
      accountType: "2",
      address: "Kukatpally",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pinCode: "500012",
      mpocName: "Balram",
      mpocDesignation: "Developer",
      mpocEmail: "balramsingh@gmail.com",
      mpocContact: "9603445061",
      tpocName: "balramsignh",
      tpocDesignation: "Software",
      tpocEmail: "balram.singh@syntizen.com",
      tpocContact: "9603445061",
      walletSettings: {
        accountBalance: "2856.00",
        validTill: "12/01/2024",
        status: "0",
        remarks: "",
      },
      mobile: "9603445061",
      email: "balram.singh@syntizen.com",
    },
    {
      accountId: "17",
      accountName: "branch x",
      accountType: "2",
      address: "Kukatpally",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pinCode: "400029",
      mpocName: "Athira murali",
      mpocDesignation: "Senior communication manager",
      mpocEmail: "athira@branchx.com",
      mpocContact: "9970581474",
      tpocName: "Spurthi Gowda",
      tpocDesignation: "Senior System Architect",
      tpocEmail: "spurthi@branchx.in",
      tpocContact: "9970581474",
      walletSettings: {
        accountBalance: "3000.00",
        validTill: "08/30/2024",
        status: "2",
        remarks: "",
      },
      mobile: "9603445061",
      email: "balram.singh@syntizen.com",
    },
    {
      accountId: "11",
      accountName: "Syntizen testing",
      accountType: "1",
      address: "Office No: 806 Manjeera Majestic Commercial",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pinCode: "500085",
      mpocName: "Balram",
      mpocDesignation: "Developer",
      mpocEmail: "balram.singh@syntizen.com",
      mpocContact: "9603445061",
      tpocName: "Balram",
      tpocDesignation: "Developer",
      tpocEmail: "balram.singh@syntizen.com",
      tpocContact: "9603445061",
      walletSettings: {
        accountBalance: "2856.00",
        validTill: "12/01/2024",
        status: "1",
        remarks: "",
      },
      mobile: "9603445061",
      email: "balram.singh@syntizen.com",
    },
    {
      accountId: "9",
      accountName: "Syntizen aws testing",
      accountType: "2",
      address: "Kukatpally",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pinCode: "500012",
      mpocName: "Balram",
      mpocDesignation: "Developer",
      mpocEmail: "balramsingh@gmail.com",
      mpocContact: "9603445061",
      tpocName: "balramsignh",
      tpocDesignation: "Software",
      tpocEmail: "balram.singh@syntizen.com",
      tpocContact: "9603445061",
      walletSettings: {
        accountBalance: "2856.00",
        validTill: "12/01/2024",
        status: "2",
        remarks: "",
      },
      mobile: "9603445061",
      email: "balram.singh@syntizen.com",
    },
    {
      accountId: "19",
      accountName: "Syntizen testing",
      accountType: "1",
      address: "Office No: 806 Manjeera Majestic Commercial",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pinCode: "500085",
      mpocName: "Balram",
      mpocDesignation: "Developer",
      mpocEmail: "balram.singh@syntizen.com",
      mpocContact: "9603445061",
      tpocName: "Balram",
      tpocDesignation: "Developer",
      tpocEmail: "balram.singh@syntizen.com",
      tpocContact: "9603445061",
      walletSettings: {
        accountBalance: "2856.00",
        validTill: "12/01/2024",
        status: "1",
        remarks: "",
      },
      mobile: "9603445061",
      email: "balram.singh@syntizen.com",
    },
    {
      accountId: "22",
      accountName: "Syntizen aws testing",
      accountType: "2",
      address: "Kukatpally",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pinCode: "500012",
      mpocName: "Balram",
      mpocDesignation: "Developer",
      mpocEmail: "balramsingh@gmail.com",
      mpocContact: "9603445061",
      tpocName: "balramsignh",
      tpocDesignation: "Software",
      tpocEmail: "balram.singh@syntizen.com",
      tpocContact: "9603445061",
      walletSettings: {
        accountBalance: "2856.00",
        validTill: "12/01/2024",
        status: "1",
        remarks: "",
      },
      mobile: "9603445061",
      email: "balram.singh@syntizen.com",
    },
  ];

  const headers = [
    {
      label: "Account ID",
      key: "accountId",
    },
    {
      label: "Account Name",
      key: "accountName",
    },
    {
      label: "Account Type",
      key: "accountType",
    },
    {
      label: "City",
      key: "city",
    },
    {
      label: "Mobile",
      key: "mobile",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Status",
      key: "status",
    },
  ];

  const onClickAdd = () => {
    setVisibleModalAdd(true);
  };

  return (
    <Card
      className={styles.card}
      classCardHead={styles.head}
      title="Manage Accounts"
      classTitle={cn("title-purple", styles.title)}
      head={
        <>
          <SearchTextInput
            className={styles.form}
            value={search}
            placeholder="Search"
            type="text"
            name="search"
            icon="search"
            onChange={onChange}
            autoComplete="off"
          />
          <ActionArea
            className={styles.sorting}
            headers={headers}
            data={data}
            elementRef={pdfAreaRef}
            isAdd={true}
            onClickAdd={onClickAdd}
          />
        </>
      }
    >
      <div ref={pdfAreaRef}>
        <Table headers={headers} data={data} pageSize={5} />
      </div>
      <Modal
        outerClassName={styles.outer}
        visible={visibleModalAdd}
        onClose={() => setVisibleModalAdd(false)}
        heading={"Add Account"}
      >
        <Form data={{}} isEdit={false} />
      </Modal>
    </Card>
  );
};

export default ManageAccounts;
