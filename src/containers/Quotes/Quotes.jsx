import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import './Quotes.css'

import classes from './Quotes.css'

class Quotes extends Component {
    state = {
        quotes: [{
            author: 'J. B. Priestley',
            text: 'I have always been delighted at the prospect of a new day, a fresh try, one more start, with perhaps a bit of magic waiting somewhere behind the morning.'
        },
        {
            author: 'Sharon Begley',
            text: 'Somewhere, something incredible is waiting to be known.'
        },
        {
            author: 'Heraclitus',
            text: 'No man ever steps in the same river twice, for it\'s not the same river and he\'s not the same man.'
        },
        {
            author: 'Andre Gide',
            text: 'It is only in adventure that some people succeed in knowing themselves - in finding themselves.'
        },
        {
            author: 'Anthony J. D\'Angelo',
            text: 'Develop a passion for learning. If you do, you will never cease to grow.'
        },
        {
            author: 'William Arthur Ward',
            text: 'Curiosity is the wick in the candle of learning.'
        },
        {
            author: 'Gilbert K. Chesterton',
            text: 'There are no rules of architecture for a castle in the clouds.'
        },
        {
            author: 'Thomas A. Edison',
            text: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.'
        },
        {
            author: 'Nathaniel Hawthorne',
            text: 'Time flies over us, but leaves its shadow behind.'
        },
        {
            author: 'Dietrich Bonhoeffer',
            text: 'Gratitude changes the pangs of memory into a tranquil joy.'
        },
        {
            author: 'Mahatma Gandhi',
            text: 'You must be the change you wish to see in the world.'
        }]
    }

    randomizeQuote = this.state.quotes[Math.floor(Math.random() * 10)]

    render() {
        return (
            <Aux>
                <div className={"column is-11 " + classes.center}>
                    <blockquote>
                        <p className={classes.quotes}>{this.randomizeQuote.text}</p>
                        <div>
                            <p className={classes.sub}>- {this.randomizeQuote.author}</p>
                        </div>
                    </blockquote>
                </div>
            </Aux>
        );
    }
}

export default Quotes;