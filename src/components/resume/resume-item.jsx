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
        <a className={styles.headerLink} href={props.titleLink} target="_blank">
            {props.title}
        </a>
        <p>
            {props.description}
        </p>
        <a className={styles.school} href={props.locationLink} target="_blank">
            {props.location}
        </a>
    </div>
)
