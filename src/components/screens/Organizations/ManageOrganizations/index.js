import React, { useState, useRef } from "react";
import cn from "classnames";
import styles from "./ManageOrganizations.module.sass";
import Card from "../../../Card";
import SearchTextInput from "../../../SearchTextInput";
import ExportArea from "../ActionArea";
import Table from "./Table";

const ManageOrganizations = () => {
  const [search, setSearch] = useState("");
  const pdfAreaRef = useRef(null);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const data = [
    {
      organizationName: "Syntizen Technologies PVT LTD",
      address:"Office No: 806 Manjeera Majestic Commercial, JNTUH-Hitech City Road, Hyderabad",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pinCode: "500085",
      email: "balram.singh@syntizen.com",
      mobileNo: "9603445061",
      phoneNo: "9603445061",
      status: "active",
    },
  ];

  const headers = [
    {
      label: "Organization Name",
      key: "organizationName",
    },
    {
      label: "City",
      key: "city",
    },
    {
      label: "Country",
      key: "country",
    },
    {
      label: "Pin Code",
      key: "pinCode",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Mobile",
      key: "mobile",
    },
  ];

  return (
    <Card
      className={styles.card}
      classCardHead={styles.head}
      title="Manage Organizations"
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
          />
          <ExportArea
            className={styles.sorting}
            headers={headers}
            data={data}
            elementRef={pdfAreaRef}
          />
        </>
      }
    >
      <div ref={pdfAreaRef}>
        <Table headers={headers} data={data} pageSize={10} />
      </div>
    </Card>
  );
};

export default ManageOrganizations;
