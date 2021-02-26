import React from 'react'
import styles from "./HeaderOption.module.css";
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import { selectUser } from '../features/counter/userSlice';

function HeaderOption({Icon, title, avatar, onClick}) {
    const user = useSelector(selectUser);
    
    return (
        <div onClick={onClick} className={styles.headerOption}>
            {Icon && <Icon className={styles.headerOption_icon} />}
            {
                avatar &&
                    <Avatar className={styles.headerOption_icon} >
                        {user.user?.email[0]}
                        </Avatar>
                
            }
            <h3 className={styles.headerOption_title}>{title}</h3>
        </div>
    )
}

export default HeaderOption
