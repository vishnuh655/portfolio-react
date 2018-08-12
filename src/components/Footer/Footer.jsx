import React from 'react';
import classes from './Footer.css';

const Footer = () => {
    return (
        <div className="column">
            <footer className={classes.Footer}>
                <span className="icon">
                    <a href="https://github.com/vishnuh655"><i className={"column fab fa-github " + classes.space} /></a>
                    <a href="https://www.linkedin.com/in/vishnuh655"><i className="column fab fa-linkedin-in" /></a>
                </span>
            </footer>
        </div>

    );
}

export default Footer;