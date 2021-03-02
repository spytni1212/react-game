import React from 'react';
import s from './Progress.module.css'

const Progress = (props) => {
    return (
        <div className={s.progressContainer}>
            <div className={s.score}>score: <span className={s.scoreData}>{props.score}</span></div>
            <div className={s.time}>time: <span className={s.timeData}>{props.time}</span></div>
        </div>
    )
}

export default Progress;