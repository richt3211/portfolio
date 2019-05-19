import React from 'react'
import styles from './about.module.scss';
import profile from "./profile-picture.jpg";
import { Link } from 'react-scroll';
export default () => (
    <div className={`row mb-5 align-items-center`}>
        <div className={`col-lg-7 pr-lg-5 mb-5 mb-lg-0`}>
            <img className={`img-fluid`} src={profile}></img>
        </div>
        <div className={`col-lg-5 pl-lg-5`}>
            <div className={`section-heading`}>
                <h2>
                    About
                    <strong> Me</strong>
                </h2>
            </div>
            <p className={`lead`}>
                I'm currently a junior in the Computer Science program at the University of Utah, Full Stack Web Developer, Software Engineer Intern at 3M HIS, and a soon to be father. 
            </p>
            <p className={`mb-5`}>
                I'm generally interested in anything scientific or philosophical, but the majority of my focus
                and study is in software technology. I have experience in website development and desktop software development, 
                and I've dabbled in cloud computing systems. The long range of my career goal is to learn and develop systems 
                that faciliate Artificial Intelligence through Machine Learning. See below for a breakdown of my current skill set. 
            </p>
            <p>
                <Link
                    to="section-contact"
                    className={`btn btn-primary px-4 py-2 btn-sm smoothscroll ${styles.firstButton}`}
                    smooth={true}
                    offset={50}
                    duration={500}
                    spy={true}
                >Hire Me</Link>

                <a className={`btn btn-secondary px-4 py-2 btn-sm smoothscroll`} href="#">
                    Download CV
                </a>
            </p>
        </div>
    </div>
)
