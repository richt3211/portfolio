import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import styles from './header.module.scss';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            lastScrollTop: 0,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });
    }
    componentWillUnMount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    handleScroll(event) {
        var st = window.pageYOffset;
        console.log(window);
        if (st > this.state.lastScrollTop) {
            // downscroll code
            this.setState({ active: false });
        } else {
            // upscroll code
            this.setState({ active: true });
        }
        this.setState({
            lastScrollTop: st,
            scrolled: st >= 250 ? true : false
        });
    }
    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-light site-navbar 
                ${this.state.scrolled ? styles.scrolled : ''} 
                ${this.state.active ? styles.awake : styles.sleep} 
                ${styles.siteNavbar}`} id="pb-navbar">
                <div className={`container`}>
                    <button
                        className={`navbar-toggler`}
                        type="button"
                    >
                        <span className={`navbar-toggler-icon`}></span>
                    </button>
                    <Link
                        className={`navbar-brand ${styles.button}`}
                        onClick={this.scrollToTop}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={500}>
                        RWT</Link>
                    <div className={`collapse navbar-collapse justify-content-md-center`} id="navbar">
                        <ul className={`navbar-nav ${styles.UL}`}>
                            <li className={`nav-item`}>
                                <Link
                                    onClick={this.scrollToTop}
                                    className={`nav-link ${styles.link}`}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    delay={500}
                                >Home</Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link
                                    to="section-about"
                                    activeClass={styles.active}
                                    className={`nav-link ${styles.link}`}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    spy={true}
                                >About</Link>
                                {/* <a className={`nav-link ${styles.link}`} href="#section-about">About</a> */}
                            </li>
                            <li className={`nav-item`}>
                                <Link
                                    to="section-projects"
                                    activeClass={styles.active}
                                    className={`nav-link ${styles.link}`}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    spy={true}
                                >Projects</Link>
                                {/* <a className={`nav-link ${styles.link}`} href="#section-projects">Projects</a> */}
                            </li>
                            <li className={`nav-item`}>
                                <Link
                                    to="section-resume"
                                    activeClass={styles.active}
                                    className={`nav-link ${styles.link}`}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    spy={true}
                                >Resume</Link>
                                {/* <a className={`nav-link ${styles.link}`} href="#section-resume">Resume</a> */}
                            </li>
                            <li className={`nav-item`}>
                                <Link
                                    to="section-contact"
                                    activeClass={styles.active}
                                    className={`nav-link ${styles.link}`}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    spy={true}
                                >Contact</Link>
                                {/* <a className={`nav-link ${styles.link}`} href="#section-contact">Contact</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

// ReactDOM.render(
//     <Header />,
//     document.getElementById('root')
//   );