import React from 'react';
import styles from './banner.module.scss';
import profile from './profile-picture.png';
import { Link } from 'react-scroll';
export default () => (
    <div className={`container`}>
        <div className={`row align-items-center justify-content-center ${styles.bannerContainer}`}>
            <div className={`col-md-10 text-center`}>
                <h1 className={styles.bigBannerText} >
                    Hello, my name is <br></br> <strong>Richard Timpson</strong>
                </h1>
                <p className={`${styles.smallBannerText} lead mb-4`}>I'm a Software Engineer, Freelance Web Developer, and Full-Time Student</p>
                <p className={styles.moreButton}>
                    <Link
                        to="section-about"
                        className={`btn btn-primary px-4 py-3 smoothscroll`}
                        smooth={true}
                        offset={50}
                        duration={500}
                        spy={true}
                    >More on me</Link>
                </p>
            </div>
        </div>
    </div>
)