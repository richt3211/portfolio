import React from 'react';
import styles from './skills.module.scss';
import Progress from '../progress/progress';
import Resume from './rwt-resume.pdf';

export default () => (
    // <div class="row pt-5" className= {styles.skillsContainer}>
    <div class="row pt-5">
        <div class="col-md-3 mb-3">
            <div className={`section-heading`}>
                <h2>
                    My <strong>Skills</strong>
                </h2>
            </div>
        </div>
        <div class="col-md-9">
            <Progress name="Angular" width="90"></Progress>
            <Progress name="Vue" width="50"></Progress>
            <Progress name="React" width="60"></Progress>
            <Progress name=".NET" width="75"></Progress>
            <Progress name="Laravel" width="85"></Progress>
            <Progress name="Node" width="50"></Progress>
        </div>
    </div>
)