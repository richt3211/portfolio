import React from 'react';
import styles from './resume-item.module.scss';
import calendar from './084-calendar.svg';

export default (props) => (
    <div className={`mb-4 bg-light ${styles.resumeItem}`}>
        <span className={styles.date}>
            {/* <span className={`icon-calendar ${styles.icon}`}></span> */}
            <img src={calendar}/>
            {/* {props.date} */}
            <p>{props.date}</p>
        </span>
        <h3>{props.title}</h3>
        <p>
            {props.description}
        </p>
        <span className={styles.school}>
            {props.location}
        </span>
    </div>
)
