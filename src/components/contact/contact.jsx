import React from 'react';
import styles from './contact.module.scss';

export default () => (
    <div className={`container`}>
        <div className={`row`}>
            <div className={`col-md-12 mb-5`}>
                <div className={`section-heading text-center`}>
                    <h2>
                        Wanna <strong>start work</strong> with me?
                    </h2>
                </div>
            </div>
            <div className={`col-md-7 mb-5 mb-md-0`}>
                <form action class={`site-form`}>
                    <h3 class={`mb-5`}>
                        Get in Touch
                    </h3>
                    <div className={`form-group`}>
                        <input type="text" className={`${styles.formControl} form-control px-3 py-4`}placeholder="Your Name"
                        ></input>
                    </div>
                    <div className={`form-group`}>
                        <input type="text" className={`${styles.formControl} form-control px-3 py-4`}placeholder="Your Email"
                        ></input>
                    </div>
                    <div className={`form-group`}>
                        <input type="text" className={`${styles.formControl} form-control px-3 py-4`}placeholder="Your Phone"
                        ></input>
                    </div>
                    <div className={`form-group`}>
                        <textarea type="text" cols="30"rows="10"className={`${styles.formControl} form-control px-3 py-4 mb-5`} placeholder="Write a message"
                        ></textarea>
                    </div>
                    <div className={`form-group`}>
                        <input type="submit" cols="30" rows="10" value="Send Message" className={`${styles.button} btn btn-primary px-4 py-3`}
                        ></input>
                    </div>
                </form>
            </div>
            <div className={`col-md-5 pl-md-5`}>
                <h3 className={`mb-5`}>
                    My Contact Details
                </h3>
                <ul className={`${styles.siteContactDetails}`}>
                    <li>
                        <span className={`text-uppercase`}>Email</span>
                        richardtimpson80@gmail.com
                    </li>
                    <li>
                        <span className={`text-uppercase`}>Phone</span>
                        (435) 251-7755
                    </li>
                    <li>
                        <span className={`text-uppercase`}>Location</span>
                        Draper, Utah
                    </li>
                </ul>
            </div>
        </div>
    </div>
)