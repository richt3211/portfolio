import React from "react"
import Header from '../components/header/header';
import Banner from '../components/banner/banner.jsx';
import About from '../components/about/about.jsx';
import Projects from '../components/projects/projects.jsx';
import Skills from '../components/skills/skills.jsx';
import Resume from '../components/resume/resume.jsx';
import '../utils/bootstrap.min.css'
import '../utils/global.scss';
import Footer from '../components/footer/footer.jsx';
import styles from './index.module.scss';



export default () => (
    <div className= {styles.site}>
        <Banner></Banner>
        <section className={styles.aboutSection}>
            <div className="container">
                <About></About>
                <Skills></Skills>
            </div>
        </section>
        <section className={`${styles.portfolioSection} bg-light`}>
            <Projects></Projects>
        </section>
        <section className="site-section site-resume">
            <Resume></Resume>
        </section>
            <Footer></Footer>
    </div>
)

