import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Logo.css'
import logo from '../../logo.png'

const Logo = () => {

    const cssClass = "column is-11 is-centered " + classes.Logo;
    return (
        <Aux>
            <div className={cssClass} >
                <img className={classes.responsive} src={logo} alt="" />
            </div>
        </Aux>
    );
}

export default Logo;