import React from "react"
import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import styles from './index.module.css';

export default () => (
    <div className= {styles.site}>
        <Header>
            <h1>This is the header</h1>
            <h2>This is the smaller header</h2>
        </Header>
        <Banner></Banner>
        <About></About>
        <Projects></Projects>
    </div>
)

