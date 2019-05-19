import React from 'react';
import styles from './footer.module.scss';
import Resume from '../skills/rwt-resume.pdf';
import github from './github.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';

const year = new Date().getFullYear();

export default () => (
    <div className={`container`}>
        <div className={`row mb-3`}>
            <div className={`col-md-12 text-center `} >
                <p className={styles.p}>
                    <a href="#" className={`${styles.socialItem}`} >
                        <img src={github}></img>
                    </a>
                    <a href="#" className={`${styles.socialItem}`} >
                        <img src={instagram}></img>
                    </a>
                    <a href="#" className={`${styles.socialItem}`} >
                        <img src={linkedin}></img>
                    </a>
                </p>
            </div>
        </div>
        <div className={`row`}>
            <p className={`col-12 text-center`}>
                Copyright @ {year} Richard Timpson. All Rights Reserved | 
                This webiste was based on a template by <a href="https://colorlib.com" target="_blank" className={`text-primary ${styles.a}`}>Colorlib</a>
            </p>
        </div>
    </div>
);