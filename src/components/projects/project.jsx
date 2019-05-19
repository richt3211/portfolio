import React from 'react';
import styles from './project.module.scss';

const portfolioStyles = `${styles.portfolio} col-md-4`


export default (props) => (
    <div className={portfolioStyles} >
        <a className={styles.relative} href={props.link} target="_blank">
            <div className={styles.thumb}>
                <img className={`img-fluid`} src={props.image}></img>
            </div>
        </a>
        <div className={styles.pInner}>
            <h4>{props.name}</h4>
            <div className={styles.cat}>
                {props.description}
            </div>
        </div>
    </div>
)