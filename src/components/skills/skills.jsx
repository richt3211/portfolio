import React from 'react';
import styles from './skills.module.scss';
import Progress from '../progress/progress';
import Resume from './rwt-resume.pdf';

export default () => (
    // <div class="row pt-5" className= {styles.skillsContainer}>
    <div class="row pt-5">
        <div class="col-md-3 mb-3">
            <div className={styles.skillsHeading}>
                <h2>
                    My <strong>Skills</strong>
                </h2>
            </div>
        </div>
        <div class="col-md-9">
            <Progress name="Skill" width="85"></Progress>
            <Progress name="Skill" width="85"></Progress>
            <Progress name="Skill" width="85"></Progress>
            <Progress name="Skill" width="85"></Progress>
            <Progress name="Skill" width="85"></Progress>

        </div>
    </div>
)