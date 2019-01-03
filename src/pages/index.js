import React from "react"
import Header from '../components/header';
import styles from './index.module.css';

export default () => (
    <div className= {styles.site}>
        <Header>
            <h1>This is the header</h1>
            <h2>This is the smaller header</h2>
        </Header>
        <h1 className = {styles.header} >Portfolio site coming soon!</h1>
    </div>
)

