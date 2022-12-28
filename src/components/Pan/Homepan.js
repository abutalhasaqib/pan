import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Styles from "./Homepan.module.sass"
import overview_styles from "../../components/screens/Home/Overview/Overview.module.sass"
import UpgradeToPro from "../screens/UpgradeToPro"
import stylesSideBar from "../../components/Sidebar/Sidebar.module.sass"
import Sidebar from '../Sidebar'
import { useState } from 'react'


// import TextInput from '../TextInput'
// import signStyles from "../screens/SignIn/SignInForm.module.sass"
// import Overview from '../screens/Home/Overview'
// import SignIn from '../screens/SignIn'
// import Card from '../Card'
// import Image from '../Image'
// import Panel from '../ModalProduct/Product/Panel'


const Homepan = () => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <Header
                open={() => setVisible(true)}
                className={Styles.panheader}
                searchbar={true}
                menu={true}
            />
            {/* <Sidebar
                className={cn(stylesSideBar.sidebar, { [stylesSideBar.visible]: visible })}
                onClose={() => setVisible(false)}
            /> */}
            <div className={cn(overview_styles.section, Styles.cus_main1)}>
                <UpgradeToPro />
            </div>
        </>
    )
}

export default Homepan

