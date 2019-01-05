import React from 'react';
import styles from './banner.module.css';
import profile from './profile-picture.png';

export default () => (
    <div className = {styles.bannerBackground}>
        <div className= {styles.bannerText}>
            <p className = {styles.bigBannerText} > MY NAME IS <span className= {styles.bannerTextBold}>RICHARD TIMPSON</span></p>
            <p className = {styles.smallBannerText}>I'M A <span className= {styles.bannerTextBold}>SOFTWARE ENGINEER</span> AND <span className= {styles.bannerTextBold}>FREELANCE WEB DEVELOPER</span></p>
        </div>
        <img className ={styles.profilePicture} src = {profile} alt="Profile picture"></img>
    </div>
)