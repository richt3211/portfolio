import React from 'react';
import styles from './resume.module.scss';

export default () => (
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-5">
                <div className={`section-heading text-center ${styles.sectionHeading}`}>
                    <h2>
                        My <strong>Resume</strong>
                    </h2>
                </div>
            </div>
            <div className="col-md-6">
                <h2 className="mb-5">
                    Education
                </h2>
            </div>
            <div className="col-md-6">

            </div>
        </div>
    </div>
)