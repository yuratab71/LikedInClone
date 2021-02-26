import React from 'react';
import styles from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "../HeaderOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon  from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/counter/userSlice";
import { auth } from '../firebase';
import { selectUser } from '../features/counter/userSlice';

function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logOutFromApp = () =>{
        dispatch(logout());
        auth.signOut();
    }
    
    return (
        <div className={styles.header}>
           <div className={styles.header_left}>
               <img src="data:image/jpeg;base64,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" 
               alt=""
               />
               <div className={styles.header_search}>
                    <SearchIcon/>
                    <input placeholder="Search" type="text"/>
               </div>
            </div>
            <div className={styles.header_right}>
                {/* icons */}
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon ={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Chats" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true}
                title="me"
                onClick={logOutFromApp}
                />
            </div> 
        </div>
    )
}

export default Header
