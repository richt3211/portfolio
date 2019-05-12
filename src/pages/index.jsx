import React from "react"
import Header from '../components/header/header';
import Banner from '../components/banner/banner.jsx';
import About from '../components/about/about.jsx';
import Projects from '../components/projects/projects.jsx';
import Skills from '../components/skills/skills.jsx';
import '../utils/bootstrap.min.css'
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
        <section className={styles.portfolioSection}>
            <Projects></Projects>
        </section>
            <Footer></Footer>
    </div>
)

