import React from 'react';
import styles from './banner.module.scss';
import profile from './profile-picture.png';

export default () => (
    <div className={styles.bannerBackground}>
        <nav className={styles.container}>
            <div className={styles.logo}>
                <span>Home</span>
            </div>
            <div className={styles.linkContainer}>
                <div className={styles.links}>
                    <a href="#">About</a>
                    <a href="#">Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </nav>
        <div className={styles.bannerText}>
            <div className={styles.bigBannerText}>
                <h1 className={styles.bigBannerText} > Hello, my name is </h1>
                <span className={styles.bannerTextBold}>Richard Timpson</span>
            </div>
            <p className={styles.smallBannerText}>I'm a Software Engineer, Freelance Web Developer, and Full-Time Student</p>
            <p className={styles.moreButton}>
                <a>
                    More on me
                </a>
            </p>
        </div>
    </div>
)