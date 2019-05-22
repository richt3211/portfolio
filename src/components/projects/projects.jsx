import React from 'react';
import styles from './projects.module.scss';
import Spacewars from './space-wars-img.png';
import Spreadsheet from './spreadsheet-img.png';
import Project from './project';
import Portfolio from './portfolio.png';

const sectionHeadingClasses = `section-heading text-center col-md-12 ${styles.sectionHeading}`;

export default () => (
    <div className="container">
        <div className="row">
            <div className={sectionHeadingClasses}>
                <h2>My <strong>Portfolio</strong>
                </h2>
            </div>
        </div>
        <div className="row">
            <Project 
                name="Portfolio Site" 
                description="React/Gatsby | Bootstrap" 
                image={Portfolio} 
                link="https://github.com/richt3211/portfolio">
            </Project>
            <Project 
                name="Spacewars" 
                description="C# | .NET Framework" 
                image={Spacewars} 
                link="https://github.com/richt3211/CS-3500/tree/master/SpaceWars">
            </Project>
            <Project 
                name="Multi User Spreadsheet" 
                description="C/C++ | C# | .NET Framework" 
                image={Spreadsheet} 
                link="https://github.com/richt3211/CS-3500/tree/master/SpreadSheet">
            </Project>

        </div>
    </div>
)