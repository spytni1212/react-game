const SET_FIELD = 'SET_FIELD';
const SET_FOOD = 'SET_FOOD';
const SET_HEAD = 'SET_HEAD';
const SET_TAIL = 'SET_TAIL';
const ADD_SCORE = 'ADD_SCORE';
const TOOGLE_IS_FOOD = 'TOOGLE_IS_FOOD';
const TOOGLE_IS_HEAD = 'TOOGLE_IS_HEAD';
const TOOGLE_IS_TAIL = 'TOOGLE_IS_TAIL';
const SET_DIRECTION = 'SET_DIRECTION';
const CHANGE_HEAD_COORDINATES = 'CHANGE_HEAD_COORDINATES';
const GAME_OVER = 'GAME_OVER';



let initialState = {
    rows: 10,
    cols: 10,
    field: [],
    food: {},
    snake: {
        head: {},
        tail: []
    },
    currentDirection: 'right',
    tickTime: 500,
    score: 0,
    die: false
};


const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FIELD: 
            return { ...state, field: action.field }
        case SET_FOOD:
            return { ...state, food: action.foodCoordinates }
        case SET_HEAD:
        return { ...state, snake: {...state.snake, head: action.headCoordinates}}
        case SET_TAIL:
        return { ...state, snake: {...state.snake, tail: action.tailCoordinates}}
        case TOOGLE_IS_FOOD:
            return { ...state,
                 field: state.field.map(fieldItem => {
                    if (fieldItem.row === state.food.row &&
                        fieldItem.col === state.food.col) {
                            return {
                                ...fieldItem,
                                isFood: true
                            }
                        } else {
                            return {
                                ...fieldItem,
                                isFood:false
                            }
                        }
            }) }     
        case TOOGLE_IS_HEAD:
        return { ...state,
                field: state.field.map(fieldItem => {
                if (fieldItem.row === state.snake.head.row &&
                    fieldItem.col === state.snake.head.col) {
                        return {
                            ...fieldItem,
                            isHead: true
                        }
                    } else {
                        return {
                            ...fieldItem,
                            isHead: false
                        }
                    }
        }) } 
        case TOOGLE_IS_TAIL:
        return { ...state,
                field: state.field.map(fieldItem => {
                   if (state.snake.tail.find(tailItem => tailItem.col === fieldItem.col && tailItem.row === fieldItem.row)) {
                           return {
                               ...fieldItem,
                               isTail: true
                            } 
                        } else {
                            return {
                                ...fieldItem,
                                isTail: false
                            }
                       }
        }) } 
        case ADD_SCORE:
            return { ...state, score: state.score + 1 }
        case GAME_OVER:
            return { ...state, die: true }    
        case SET_DIRECTION:
            return {
                ...state, currentDirection: action.direction
            }
        case CHANGE_HEAD_COORDINATES:
            let head = state.snake.head
            switch(state.currentDirection) {
                case 'left':
                    head.col--;
                    break;
                case 'up':
                    head.row--;
                    break;
                case 'down':
                    head.row++;
                    break;
                case 'right':
                    default:
                    head.col++;
                    break;
            }
        return { ...state, snake: {...state.snake, head: head}}
        default:
            return state;
    }
}

export const setFieldAC = (field) => ({type: SET_FIELD, field})
export const setFoodAC = (foodCoordinates) => ({type: SET_FOOD, foodCoordinates})
export const setHeadAC = (headCoordinates) => ({type: SET_HEAD, headCoordinates})
export const setTailAC = (tailCoordinates) => ({type: SET_TAIL, tailCoordinates})
export const toogleIsFoodAC = () => ({type: TOOGLE_IS_FOOD})
export const toogleIsHeadAC = () => ({type: TOOGLE_IS_HEAD})
export const toogleIsTailAC = () => ({type: TOOGLE_IS_TAIL})
export const addScoreAC = () => ({type: ADD_SCORE})
export const gameOverAC = () => ({type: GAME_OVER})
export const setDirectionAC = (direction) => ({type: SET_DIRECTION, direction})
export const changeHeadCoordinatesAC = () => ({type: CHANGE_HEAD_COORDINATES})


export default gameReducer;
