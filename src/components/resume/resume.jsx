import React from 'react';
import styles from './resume.module.scss';
import ResumeItem from './resume-item.jsx';

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
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-5">
                        Education
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ResumeItem
                        date="May 2019 - Present"
                        title="This is a test title"
                        description="This is longer test description with a lot more text that takes up a lot more space"
                        location="Test Location"
                    ></ResumeItem>
                </div>
                <div className="col-md-6">
                    <ResumeItem
                        date="May 2019 - Present"
                        title="This is a test title"
                        description="This is longer test description with a lot more text that takes up a lot more space"
                        location="Test Location"
                    ></ResumeItem>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-5">
                        Experience
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ResumeItem
                        date="May 2019 - Present"
                        title="This is a test title"
                        description="This is longer test description with a lot more text that takes up a lot more space"
                        location="Test Location"
                    ></ResumeItem>
                </div>
                <div className="col-md-6">
                    <ResumeItem
                        date="May 2019 - Present"
                        title="This is a test title"
                        description="This is longer test description with a lot more text that takes up a lot more space"
                        location="Test Location"
                    ></ResumeItem>
                </div>
            </div>
        </div>
    </div>
)