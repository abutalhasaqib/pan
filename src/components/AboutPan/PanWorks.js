import cn from 'classnames'
import React from 'react'
import styles from "./PanWorks.module.sass"
import LineIcon from "react-lineicons";


const PanWorks = () => {
    const data = [
        {
            "heading": "Create An Account",
            "para": "Create Own Team With Your Super Distributer, Distributer And Retailer Accounts.",
            "num": "01",
            "icon": "user",
            "color": "bg-danger"
        },
        {
            "heading": "Buy Distribute Coupon",
            "para": "Buy Coupon And Distribute Coupons To Your Team With Realtime Coupon Updation.",
            "num": "02",
            "icon": "postcard",
            "color": "bg-success"

        },
        {
            "heading": "Check History",
            "para": "Get The Realtime Coupon Buying Data, Distributed Data And Joining Data.",
            "num": "03",
            "icon": "bar-chart",
            "color": "bg-primary"

        },

    ]


    return (
        <>
            <section className={styles.main2}>
                <div className="container" style={{width : "100%"}}>
                    <div className="row">
                        <div className="col text-center">
                            <div className={cn(styles.sec_heading, "center")}>
                                <h2>How It Works?</h2>
                                <p>How to start work with us and working process</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {data.map((item, idx) => {
                            return (
                                <div className="col-lg-4 col-md-4">
                                    <div className={styles.middle_icon_features}>
                                        <div className={styles.middle_icon_features_item}>
                                            <div className={styles.middle_icon_large_features_box}>
                                                <LineIcon name={item?.icon}
                                                    size="sm"
                                                />
                                                <span className={cn(styles.steps, item?.color)}>{item?.num}</span>
                                            </div>
                                            <div className={cn(styles.middle_icon_features_content)}>
                                                <>
                                                    <h4>{item?.heading}</h4>
                                                    <p>{item?.para}</p>
                                                </>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default PanWorks
