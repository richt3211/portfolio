import React from 'react';
import styles from './projects.module.scss';
import Spacewars from './space-wars-img.png';
import Spreadsheet from './spreadsheet-img.png';
import Project from './project';

const sectionHeadingClasses = `section-heading text-center col-md-12 ${styles.sectionHeading}`;

export default () => (
    <div className="container">
        <div className="row">
            <div className={sectionHeadingClasses}>
                <h2>
                    <strong>Portfolio</strong>
                </h2>
            </div>
        </div>
        <div className="row">
            <Project 
                name="Spacewars" 
                description="C# | .NET Framework" 
                image={Spacewars} 
                link="https://github.com/richt3211/CS-3500/tree/master/SpaceWars">
            </Project>
            <Project 
                name="Spreadsheet" 
                description="C# | .NET Framework" 
                image={Spreadsheet} 
                link="https://github.com/richt3211/CS-3500/tree/master/SpreadSheet">
            </Project>

        </div>
    </div>
)