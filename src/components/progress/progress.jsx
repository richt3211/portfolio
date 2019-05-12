import React from 'react';
import styles from './progress.module.scss';
const progressBarStyles = `progress-bar ${styles.progressBar}`
export default (props) => (
    <div className={styles.skill}>
        <h3>{props.name}</h3>
        <div class="progress-bar" className={styles.progress}>
            <div 
                className={progressBarStyles}
                role="progressbar" 
                style={{width: `${props.width}%`}}
                valuenow={props.width}
                valuemin='0'
                valuemax="100">
                <span>
                    {`${props.width}%`}    
                </span>    
            </div>
        </div>
    </div>

)
