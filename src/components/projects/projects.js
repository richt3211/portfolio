import React from 'react';
import styles from './projects.module.css';
import Spacewars from './space-wars-img.png';
import Spreadsheet from './spreadsheet-img.png';

export default () => (
    <div className={styles.container}>
        <span className ={styles.header}>Projects</span>
        <div className={styles.projectContainer}>
            <div>
                <img src ={Spacewars}></img>
                <span className={styles.projectHeader}>Spacewars Game</span>
                <span>C#</span><span className={styles.line}></span>
                <span>.NET</span><span className={styles.line}></span>
                <span>Sockets(TCP/IP)</span>
            </div>
            <div>
                <img src ={Spreadsheet}></img>
                <span className={styles.projectHeader}>Spreadsheet Desktop Application</span>
                <span>C#</span><span className={styles.line}></span>
                <span>.NET</span><span className={styles.line}></span>
                <span>Windows Forms Application</span>
            </div>
        </div>
    </div>
)