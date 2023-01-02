import React, { useState } from "react";
import cn from "classnames";
import styles from "./Overview.module.sass";
import TooltipGlodal from "../../../TooltipGlobal";
import Card from "../../../Card";
import Dropdown from "../../../Dropdown";
import Icon from "../../../Icon";
import Tooltip from "../../../Tooltip";
import Balance from "../../../Balance";
import Chart from "./Chart";

const intervals = ["All Accounts", "Syntizen Testing"];

const items = [
  {
    title: "Total Transactions",
    counter: "128k",
    icon: "activity",
    value: 37.8,
    background: "#edf8f2",
    chartColor: "#83BF6E",
    tooltipText: "Total Transactions",
    data: [
      {
        name: "1",
        earning: 500,
      },
      {
        name: "2",
        earning: 800,
      },
      {
        name: "3",
        earning: 1100,
      },
      {
        name: "4",
        earning: 900,
      },
      {
        name: "5",
        earning: 1300,
      },
      {
        name: "6",
        earning: 800,
      },
      {
        name: "7",
        earning: 1000,
      },
    ],
  },
  {
    title: "Total Success",
    counter: "512",
    icon: "check",
    value: -37.8,
    background: "#ecf9fe",
    chartColor: "#2A85FF",
    tooltipText: "Successfull Transactions",
    data: [
      {
        name: "1",
        earning: 1300,
      },
      {
        name: "2",
        earning: 800,
      },
      {
        name: "3",
        earning: 1000,
      },
      {
        name: "4",
        earning: 500,
      },
      {
        name: "5",
        earning: 800,
      },
      {
        name: "6",
        earning: 1100,
      },
      {
        name: "7",
        earning: 900,
      },
    ],
  },
  {
    title: "Total Failure",
    counter: "10",
    icon: "close",
    value: 12,
    background: "#f2efff",
    chartColor: "#8E59FF",
    tooltipText: "Failed Transactions",
    data: [
      {
        name: "1",
        earning: 1200,
      },
      {
        name: "2",
        earning: 800,
      },
      {
        name: "3",
        earning: 1300,
      },
      {
        name: "4",
        earning: 600,
      },
      {
        name: "5",
        earning: 1300,
      },
      {
        name: "6",
        earning: 800,
      },
      {
        name: "7",
        earning: 1000,
      },
    ],
  },
];

const Overview = ({ className }) => {
  const [sorting, setSorting] = useState(intervals[0]);

  return (
    <>
      <Card
        className={cn(styles.card, className)}
        title="Overview"
        classTitle="title-purple"
        head={
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={sorting}
            setValue={setSorting}
            options={intervals}
            small
          />
        }
      >
        <div className={styles.overview}>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div
                className={styles.item}
                key={index}
                style={{ backgroundColor: x.background }}
              >
                <div className={styles.icon}>
                  <Icon name={x.icon} size="24" />{" "}
                </div>
                <div className={styles.line}>
                  <div className={styles.details}>
                    <div className={styles.category}>
                      {x.title}
                      <Tooltip
                        className={styles.tooltip}
                        title={x.tooltipText}
                        icon="info"
                        place="right"
                      />
                    </div>
                    <div className={styles.counter}>{x.counter}</div>
                    <div className={styles.indicator}>
                      <Balance className={styles.balance} value={x.value} />
                      <span>this week</span>
                    </div>
                  </div>
                  <Chart className={styles.chart} item={x} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <TooltipGlodal />
    </>
  );
};

export default Overview;
