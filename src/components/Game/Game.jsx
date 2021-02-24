import React from 'react';
import s from './Game.module.css';

const Game = (props) => {

    let state = props.gamePage

    const gridItems = state.grid.map(gridItem => {
        return <div className = {s.gridItem} key = {gridItem.row + '-' + gridItem.col}></div>
    })

    return (
        <div className = {s.snakeContainer}>
            <div className = {s.grid}>
                {gridItems}
            </div>
            
        </div>
    )
}

export default Game;