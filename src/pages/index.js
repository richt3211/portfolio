import React from "react"
import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Skills from '../components/skills/skills';
import Footer from '../components/footer/footer';
import styles from './index.module.css';

export default () => (
    <div className= {styles.site}>
        <Banner></Banner>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Footer></Footer>
    </div>
)

