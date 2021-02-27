import React from 'react';
import s from './Game.module.css';
import { connect } from 'react-redux';
import { setFieldAC, setFoodAC, toogleIsFoodAC, toogleIsHeadAC, setHeadAC, setDirectionAC } from '../../redux/game-reducer'
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
                    isFood: false,
                    isHead: false
                })
            }
        }
        this.props.setField(field)
        console.log('constructor')
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleKeyPress(e) {
      switch (e.keyCode) {
          case 37:
            this.props.setDirection('left');
            break;
      case 38:
            this.props.setDirection('up');
            break;
      case 39:
          default:
            this.props.setDirection('right');
            break;
      case 40:
            this.props.setDirection('down');
            break;
        }
      }

    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyPress);

        const food = this.getRandomCoordinates();
        const head = this.getCenterOfGrid();
        this.props.setFood(food);
        this.props.setHead(head);
        this.props.toogleIsFood();
        this.props.toogleIsHead();
        
        console.log('didMount')
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyPress);
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
        console.log('render')
        const fieldItems = this.props.gamePage.field.map(fieldItem => {
            return <div className = {fieldItem.isHead ? s.isHead : fieldItem.isFood ? s.isFood : s.fieldItem } key = {fieldItem.row + '-' + fieldItem.col}></div>
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
        setHead: (headCoordinates) => {
            dispatch(setHeadAC(headCoordinates));
        },
        toogleIsFood: () => {
            dispatch(toogleIsFoodAC());
        },
        toogleIsHead: () => {
            dispatch(toogleIsHeadAC());
        },
        setDirection: (direction) => {
            dispatch(setDirectionAC(direction))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);

