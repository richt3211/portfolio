import React from 'react'
import styles from './about.module.scss';
import profile from "./profile-picture.jpg";

export default () => (
    <div className = {styles.aboutContainer}>
        <div className={styles.imageContainer}>
            <img src={profile}></img>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.sectionHeading}>
                <h2>
                    About  
                    <span> Me</span>
                </h2>
                <p class={styles.pHeader}>
                    This is some general text about me
                </p>
                <p class={styles.pText}>
                    This is some more in detail text about me, where I am from, what I am going to school for, what I want to do with my life,
                    and where I want to go in my career. 
                </p>
                <div class={styles.buttonContainer}>
                    <a class={styles.hireButton}>
                        Hire Me
                    </a>
                    <a class={styles.cvButton}>
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    </div>
)
