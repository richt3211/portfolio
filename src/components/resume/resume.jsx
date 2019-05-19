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
                        date="August 2018 - May 2022 (expected)"
                        title="BS/MS in Computer Science"
                        description="Deans List Fall 2018, Spring 2019"
                        location="University of Utah | Salt Lake City, UT"
                    ></ResumeItem>
                </div>
                <div className="col-md-6">
                    <ResumeItem
                        date="August 2017 - May 2018"
                        title="Associate of Science in General Studies"
                        description="Graduated with Honors, President of Assocation of Computing Machinery (ACM) club Spring 2019"
                        location="Dixie State University | Saint George, UT"
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
                        title="Software Engineer Intern"
                        description=""
                        location="3M HIS | Murray, UT"
                    ></ResumeItem>
                    <ResumeItem
                        date="Nov 2017 - May 2018"
                        title="Website Developer Intern"
                        description="An unpaid part time internship for small media agency that specializes in Facebook advertising, video production, and website design and marketing..."
                        location="TrueTake Media | Colorado City, AZ"
                    ></ResumeItem>
                </div>
                <div className="col-md-6">
                    <ResumeItem
                        date="August 2018 - May 2019"
                        title="Software Engineer Intern"
                        description="A part time position for a local technology company that handles the database and telephony of sever small call centers..."
                        location="Conversion Technology LLC | Draper, Utah"
                    ></ResumeItem>
                    <ResumeItem
                        date="May 2017 - Aug 2017"
                        title="QA Intern"
                        description="Assistant to the main operations manager and worked in many areas including QA for existing and new software features, user testing and surveying, and general data entry and operations work for several different business clients."
                        location="Conversion Technology LLC | Hildale, Utah"
                    ></ResumeItem>
                </div>
            </div>
        </div>
    </div>
)