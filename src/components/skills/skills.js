import React from 'react';
import styles from './skills.module.css';

export default () => (
    <div className= {styles.skillsContainer}>
        <span className={styles.header}>Skills</span>
        <div className={styles.skillsListContainer}>
            <div className={styles.skillType}>
                <h1 className={styles.skillsHeader}>Languages</h1>
                <div className={styles.skillsList}>
                    <h2>Proficient</h2>
                    <ul>
                        <li>C#</li>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                    </ul>
                    <h2>Familiar</h2>
                    <ul>
                        <li>PHP</li>
                        <li>Java</li>
                        <li>C/C++</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
            <div className={styles.skillType}>
                <h1 className={styles.skillsHeader}>Frameworks</h1>
                <div className={styles.skillsList}>
                    <h2>Proficient</h2>
                    <ul>
                        <li>Angular</li>
                        <li>Vue</li>
                        <li>.NET Framework</li>
                    </ul>
                    <h2>Familiar</h2>
                    <ul>
                        <li>React</li>
                        <li>Laravel</li>
                        <li>Node/Express</li>
                    </ul>
                </div>
            </div>
            <div className={styles.skillType}>
                <h1 className={styles.skillsHeader}>Tools</h1>
                <div className={styles.skillsList}>
                    <h2>Proficient</h2>
                    <ul>
                        <li>Git</li>
                        <li>Github</li>
                    </ul>
                    <h2>Familiar</h2>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)