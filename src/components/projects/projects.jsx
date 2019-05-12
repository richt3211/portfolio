import React from 'react';
import styles from './projects.module.css';
import Spacewars from './space-wars-img.png';
import Spreadsheet from './spreadsheet-img.png';

export default () => (
    <div className={styles.container}>
        <span className ={styles.header}>PROJECTS</span>
        <div className={styles.projectsContainer}>
            <a href="https://github.com/richt3211/CS-3500/tree/master/SpaceWars"  className={styles.projectContainer}>
                <img src ={Spacewars}></img>
                <span className={styles.projectHeader}>Space Wars Game</span>
                <div className={styles.projectSkills}>
                    <span>C#</span><span className={styles.line}></span>
                    <span>.NET</span><div className={styles.line}></div>
                    <span>Sockets(TCP/IP)</span>
                </div>
            </a>
            <a href="https://github.com/richt3211/CS-3500/tree/master/SpreadSheet" className={styles.projectContainer}>
                <img src ={Spreadsheet}></img>
                <span className={styles.projectHeader}>Spreadsheet Desktop Application</span>
                <div className={styles.projectSkills}>
                    <span className={styles.projectSkills}>C#</span><span className={styles.line}></span>
                    <span>.NET</span><div className={styles.line}></div>
                    <span>Windows Forms Application</span>
                </div>
            </a>
        </div>
    </div>
)