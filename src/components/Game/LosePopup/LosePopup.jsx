import React from 'react';
import s from './LosePopup.module.css'

const LosePopup = (props) => {

    const startGameClickHandler = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    return (
        <div className = {s.loseContainer}>
            <span className = {s.youLose}>You lose</span>
            <span className = {s.scoreContainer}>Your score: <span className = {s.score}>{props.score}</span></span>
            <span className = {s.scoreContainer}>Your time: <span className = {s.score}>{props.time} sec</span></span>
            <div>
                <button className = {s.button} type='button' onClick={startGameClickHandler}><span className={s.buttonText}>new game</span></button>
            </div>
            
        </div>
    )
}

export default LosePopup;