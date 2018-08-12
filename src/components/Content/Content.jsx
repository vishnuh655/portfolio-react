import React from 'react';
import classes from './Content.css'
import Aux from '../../hoc/Aux'
import './Content.css'

const Content = () => {
    return (
        <Aux>
            <div className="column">
                <div className={classes.Content}>
                    <div id={classes.error}>UN<span>D</span>ER</div>
                    <div id={classes.code}>CONS<span>TRU</span><span>CTION</span></div>
                </div>
            </div>
        </Aux >

    );
}

export default Content;

// 