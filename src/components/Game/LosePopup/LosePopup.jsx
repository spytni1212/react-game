import React from 'react';
import s from './LosePopup.module.css'

const LosePopup = (props) => {
    return (
        <div className = {s.loseContainer}>
            <span className = {s.youLose}>You lose</span>
            <span className = {s.scoreContainer}>Your score: <span className = {s.score}>{props.score}</span> </span>
            <div>
                <button>new game</button>
            </div>
            
        </div>
    )
}

export default LosePopup;