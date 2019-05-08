import React from 'react';
import styles from './skills.module.css';
import Resume from './rwt-resume.pdf';

export default () => (
    <div className= {styles.skillsContainer}>
        <span className={styles.header}>Skills</span>
        <div className={styles.skillsListContainer}>
            <div className={styles.skillType}>
                <h1 className={styles.skillsHeader}>Languages</h1>
                <div className={styles.skillsList}>
                    <ul>
                        <li>C#</li>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
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
                    <ul>
                        <li>Angular</li>
                        <li>Vue</li>
                        <li>.NET Framework</li>
                        <li>React</li>
                        <li>Laravel</li>
                        <li>Node/Express</li>
                    </ul>
                </div>
            </div>
            <div className={styles.skillType}>
                <h1 className={styles.skillsHeader}>Tools</h1>
                <div className={styles.skillsList}>
                    <ul>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Visual Studio IDE</li>
                        <li>Visual Studio Code</li>
                        <li>Shell/Bash</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class={styles.resumeButton}>
            <a href={Resume} download >View My Resume</a>
        </div>
    </div>
)