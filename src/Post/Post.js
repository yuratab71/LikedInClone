import React, {forwardRef} from 'react'
import styles from "./Post.module.css";
import {Avatar} from "@material-ui/core";
import InputOption from "../Feed/InputOptions";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined"
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutLinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutLinedIcon from "@material-ui/icons/SendOutlined";

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className={styles.post}>
            <div className={styles.post_header}>
                <Avatar src={photoUrl}>{name[0]}</Avatar> 
                <div className={styles.post_info}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.post_body}>
                <p>{message}</p>
            </div>
            <div className={styles.post_buttons}>
                <InputOption Icon={ThumbUpAltOutlined} title="like" color="grey"/>
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="grey"/>
                <InputOption Icon={ShareOutLinedIcon} title="Share" color="grey"/>
                <InputOption Icon={SendOutLinedIcon} title="Send" color="grey"/>
            </div>
        </div>
    )
})

export default Post;
