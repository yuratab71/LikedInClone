import React from 'react'
import styles from "./Sidebar.module.css";
import {Avatar} from "@material-ui/core";
import { selectUser } from '../features/counter/userSlice';
import {useSelector} from "react-redux";

function Sidebar() {
    
    const user = useSelector(selectUser);
    console.log(user.user);
    const recentItems = (topic) => {
        return <div className={styles.sidebar_recentItem}>
            <span className={styles.sidebar_hash}>#</span>
            <p>{topic}</p>
        </div>
    }
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_top}>
                <img src="" />
                <Avatar src={user.user.photoUrl} className={styles.sidebar_avatar}>
                 {user.user.email[0]}
                    </Avatar>
                <h2>{user.user.displayName}</h2>
                <h4>{user.user.email}</h4>
            </div>
            <div className={styles.sidebar_stats}>
                <div className={styles.sidebar_stat}>
                    <p>Who viewd you</p>
                    <p className={styles.sidebar_statNumber}>2,567</p>
                </div>
                <div className={styles.sidebar_stat}>
                    <p>Who viewd you</p>
                    <p className={styles.sidebar_statNumber}>1,897</p>
                </div>
            </div>
            <div className={styles.sidebar_bottom}>
                <p>Recent</p>
                {recentItems("react.js")}
                {recentItems("programming")}
                {recentItems("software")}
                {recentItems("developer")}
                {recentItems("javascript")}
            </div>
        </div>
    )
}

export default Sidebar
