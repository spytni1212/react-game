import React from 'react';
import s from './Game.module.css';
import { connect } from 'react-redux';
import { setFieldAC, setFoodAC, toogleIsFoodAC } from '../../redux/game-reducer'
//import Game from './Game';

class GameContainer extends React.Component {
    
    constructor(props) {
        super(props)

        const field = [];
        for (let row = 0; row < this.props.gamePage.rows; row++) {
            for (let col = 0; col < this.props.gamePage.cols; col++) {
                field.push ({
                    row,
                    col,
                    isFood: false
                })
            }
        }
        this.props.setField(field)
        console.log('1')
    }

    componentDidMount() {
        const food = this.getRandomCoordinates();
        this.props.setFood(food);
        this.props.toogleIsFood();
        
        console.log('2')
    }

    getRandomCoordinates() {
        return {
            row: Math.floor ((Math.random() * this.props.gamePage.rows)),
            col: Math.floor ((Math.random() * this.props.gamePage.cols))
        }
    }
            
    render() {
        console.log('3')
        const fieldItems = this.props.gamePage.field.map(fieldItem => {
            return <div className = {fieldItem.isFood ? s.isFood : s.fieldItem} key = {fieldItem.row + '-' + fieldItem.col}></div>
        })
        return (
        <div className = {s.snakeContainer}>
            <div className = {s.grid}>
                {fieldItems}
            </div>
            
        </div>
    )
    }
} 

let mapStateToProps = (state) => {
    return {
        gamePage: state.gamePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setField: (field) => {
            dispatch(setFieldAC(field));
        },
        setFood: (foodCoordinates) => {
            dispatch(setFoodAC(foodCoordinates));
        },
        toogleIsFood: () => {
            dispatch(toogleIsFoodAC());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);

