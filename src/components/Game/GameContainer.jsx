import React from 'react';
import s from './Game.module.css';
import { connect } from 'react-redux';
import { setFieldAC, setFoodAC, toogleIsFoodAC, 
         toogleIsHeadAC, setHeadAC, setDirectionAC,
         setTailAC, changeHeadCoordinatesAC, toogleIsTailAC, addScoreAC, gameOverAC } from '../../redux/game-reducer'


class GameContainer extends React.Component {
    
    constructor(props) {
        super(props)

        const field = [];
        for (let row = 0; row < this.props.gamePage.rows; row++) {
            for (let col = 0; col < this.props.gamePage.cols; col++) {
                field.push ({
                    row,
                    col,
                    isFood: false,
                    isHead: false,
                    isTail: false
                })
            }
        }
        this.props.setField(field)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleKeyPress(e) {
        if (e.keyCode === 37 && this.props.gamePage.currentDirection !== 'right') {
            this.props.setDirection('left')
        } else if (e.keyCode === 38 && this.props.gamePage.currentDirection !== 'down') {
            this.props.setDirection('up')
        } else if (e.keyCode === 39 && this.props.gamePage.currentDirection !== 'left') {
            this.props.setDirection('right')
        } else if (e.keyCode === 40 && this.props.gamePage.currentDirection !== 'up') {
            this.props.setDirection('down')
        }
    }    

    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyPress);

        const food = this.getRandomCoordinates();
        const head = this.getCenterOfGrid();
        this.props.setFood(food);
        this.props.setHead(head);
        this.props.toogleIsFood();
        
        window.fnInterval = setInterval(() => {
            this.gameTick();
        }, this.props.gamePage.tickTime);
    }
    
    gameTick() {
        this.props.changeHeadCoordinates();
        let snake = this.props.gamePage.snake;
        let tailCoordinates = this.props.gamePage.snake.tail;

        if (snake.tail.find(tailItem => tailItem.col === snake.head.col &&
            tailItem.row === snake.head.row)) {
                this.props.gameOver();
            }   
        
        tailCoordinates.unshift({
            col: snake.head.col,
            row: snake.head.row
        })
        
        if (snake.head.col === this.props.gamePage.food.col &&
            snake.head.row === this.props.gamePage.food.row) {
                this.props.setFood(this.getRandomCoordinates())
                this.props.toogleIsFood();
                this.props.addScore();
        } else {
            tailCoordinates.pop()
        }

        

        
        this.props.toogleIsHead();
        this.props.toogleIsTail();
        this.props.setTail(tailCoordinates);    

        if (snake.head.row < 0 ||
            snake.head.row >= this.props.gamePage.rows ||
            snake.head.col < 0 ||
            snake.head.col >= this.props.gamePage.cols) {
                this.props.gameOver();
        }

        
        if (this.props.gamePage.die) {
            clearInterval(window.fnInterval);
        }
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyPress);
        clearInterval(window.fnInterval);
    }

    getRandomCoordinates() {
        return {
            row: Math.floor ((Math.random() * this.props.gamePage.rows)),
            col: Math.floor ((Math.random() * this.props.gamePage.cols))
        }
    }
            
    getCenterOfGrid() {
        return {
          row: Math.floor((this.props.gamePage.rows - 1) / 2),
          col: Math.floor((this.props.gamePage.cols - 1) / 2),
        }
      }

    render() {
        const fieldItems = this.props.gamePage.field.map(fieldItem => {
            return <div className = {fieldItem.isHead 
                                     ? s.isHead : fieldItem.isTail 
                                     ? s.isTail : fieldItem.isFood
                                     ? s.isFood : s.fieldItem } 
                                     key = {fieldItem.row + '-' + fieldItem.col}></div>
        })
        return (
        <div className = {s.snakeContainer}>
            <div>score: {this.props.gamePage.score}</div>
            { this.props.gamePage.die ? <div className = {s.grid}>вы проиграли</div> : 
                                        <div className = {s.grid}>{fieldItems}</div>}  
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
        setHead: (headCoordinates) => {
            dispatch(setHeadAC(headCoordinates));
        },
        setTail: (tailCoordinates) => {
            dispatch(setTailAC(tailCoordinates));
        },
        toogleIsFood: () => {
            dispatch(toogleIsFoodAC());
        },
        toogleIsHead: () => {
            dispatch(toogleIsHeadAC());
        },
        toogleIsTail: () => {
            dispatch(toogleIsTailAC());
        },
        setDirection: (direction) => {
            dispatch(setDirectionAC(direction))
        },
        changeHeadCoordinates: () => {
            dispatch(changeHeadCoordinatesAC());
        },
        addScore: () => {
            dispatch(addScoreAC());
        },
        gameOver: () => {
            dispatch(gameOverAC());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);

