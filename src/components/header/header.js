import React from 'react';
import styles from './header.module.css';

export default () => (
    <div className = {styles.container}>
        <div className = {styles.logo}>
            <img src ='#'>

            </img>
        </div>
        <div className = {styles.linkContainer}>
            <div className = {styles.links}>
                <a href ="#">About</a>
                <a href ="#">Skills</a>
                <a href ="#">Projects</a>
                <a href ="#">Contact</a>
            </div>
        </div>
    </div>
)
