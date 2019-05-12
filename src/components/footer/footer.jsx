import React from 'react';
import styles from './footer.module.css';
import Resume from '../skills/rwt-resume.pdf';
import { FaGithub } from 'react-icons/fa';


export default () => (
    <div className={styles.footerContainer}>
        <div className={styles.aboutContainer}>
            <div className={styles.contactContainer}>
                <span className={styles.aboutHeader}>CONTACT</span>
                <div>
                    <span>Draper, UT</span>
                    <span>richardtimpson80@gmail.com</span>
                    <span>435-251-7755</span>
                </div>
            </div>
            <div className={styles.resumeContainer}>
                <span className={styles.aboutHeader}>RESUME</span>
                <a href ={Resume}>Download</a>
            </div>
        </div>
        <span className={styles.line}></span>
        <div className={styles.copywriteContainer}>
            <span> 2019 Copywrite: Richard Timpson</span>
            <div className={styles.socialMedia}>
                <a href="#"><FaGithub></FaGithub></a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>

            </div>
        </div>
    </div>
);