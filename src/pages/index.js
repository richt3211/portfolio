import React from "react"
import Header from '../components/header/header';
import Background from '../components/background/background';
import About from '../components/about/about';
import styles from './index.module.css';

export default () => (
    <div className= {styles.site}>
        <Header>
            <h1>This is the header</h1>
            <h2>This is the smaller header</h2>
        </Header>
        <Background></Background>
        <About></About>
    </div>
)

