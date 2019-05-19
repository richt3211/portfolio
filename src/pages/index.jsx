import React from "react"
import { Header } from '../components/header/header.jsx';
import Banner from '../components/banner/banner.jsx';
import About from '../components/about/about.jsx';
import Projects from '../components/projects/projects.jsx';
import Skills from '../components/skills/skills.jsx';
import Resume from '../components/resume/resume.jsx';
import Contact from '../components/contact/contact.jsx';
import '../utils/bootstrap.min.css'
import '../utils/global.scss';
import Footer from '../components/footer/footer.jsx';
import styles from './index.module.scss';
import * as Scroll from 'react-scroll';
import $ from 'jquery';
// const jquery = require('../js/vendor/jquery.min.js');
// const customScript = require("../js/custom.js");

let Element = Scroll.Element;

export default () => (
    <div className={styles.site}>
        <Header></Header>
        <Element className={`${styles.bannerSection}`} name="section-home" data-stellar-background-ratio="0.5">
            <Banner></Banner>
        </Element>
        <Element className={`site-section ${styles.aboutSection}`} name="section-about" id="section-about">
            <div className="container">
                <About></About>
                <Skills></Skills>
            </div>
        </Element>
        <Element className={`${styles.portfolioSection} bg-light`} name="section-projects">
            <Projects></Projects>
        </Element>
        <Element className="site-section site-resume" name="section-resume">
            <Resume></Resume>
        </Element>
        <Element className={`site-section bg-light`} name="section-contact">
            <Contact></Contact>
        </Element>
        <footer className={`site-footer`}>
            <Footer></Footer>
        </footer>
    </div>
)