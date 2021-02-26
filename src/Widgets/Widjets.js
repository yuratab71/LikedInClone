import React from 'react'
import styles from "./Widgets.module.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widjets() {
    
    const newsArticle = (heading, subtitle) => {
        return <div className={styles.widgets_article}>
        <div className={styles.widgets_articleLeft}>
            < FiberManualRecordIcon/>
        </div>
        <div className={styles.widgets_articleRight}>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    }
    
    return (
        <div className={styles.widgets}>
            <div className={styles.widgets_header}>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
           {newsArticle("Something happened", "SUBTITLE")}
           {newsArticle("Wow", "SUBTITLE")}
           {newsArticle("Something happened", "SUBTITLE")}
        </div>
    )
}

export default Widjets
