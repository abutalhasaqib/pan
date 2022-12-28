import React from 'react'
import styles from "./AboutPan.module.sass"

const AboutPan = () => {
    return (
        <>
            <section className={styles.gray_bg}>
                <div className="container" style={{ width: "100%" }}>
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5">
                            <div className={styles.sec_heading}>
                                <h2>About Us</h2>
                                <p>TATKAL PAN SERVICE has been authorized to apply PAN CARD across India through our Super Distributor ,Distributor &amp; retailer network. Retailer will able to make online application of New PAN Card and Correction / Duplicate. A great opportunity for Super Distributor&amp; Distributor to authorized Retailers become agent for PAN Card</p>
                                {/*<a href="#" class="btn btn-theme-2 mt-3">See More Reviews</a>*/}
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <img src="https://bitspanindia.com/wlconnect/pan.png" style={{ display: 'block', margin: 'auto' }} />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default AboutPan
