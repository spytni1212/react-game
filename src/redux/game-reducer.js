const SET_FIELD = 'SET_FIELD';
const SET_FOOD = 'SET_FOOD';
const SET_HEAD = 'SET_HEAD';
const TOOGLE_IS_FOOD = 'TOOGLE_IS_FOOD';
const TOOGLE_IS_HEAD = 'TOOGLE_IS_HEAD';


let initialState = {
    rows: 10,
    cols: 10,
    field: [],
    food: {},
    snake: {
        head:{}
    },
    currentDirection: 'right'
};


const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FIELD: 
            return { ...state, field: action.field }
        case SET_FOOD:
            return { ...state, food: action.foodCoordinates }
        case SET_HEAD:
        return { ...state, snake: {...state.snake, head: action.headCoordinates}}
        case TOOGLE_IS_FOOD:
            return { ...state,
                 field: state.field.map(fieldItem => {
                    if (fieldItem.row === state.food.row &&
                        fieldItem.col === state.food.col) {
                            return {
                                ...fieldItem,
                                isFood: true
                            }
                        }
                        return fieldItem;
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
                    }
                    return fieldItem;
        }) } 
        default:
            return state;
    }
}

export const setFieldAC = (field) => ({
    type: SET_FIELD,
    field: field
})

export const setFoodAC = (foodCoordinates) => ({
    type: SET_FOOD,
    foodCoordinates: foodCoordinates
})

export const setHeadAC = (headCoordinates) => ({
    type: SET_HEAD,
    headCoordinates: headCoordinates
})

export const toogleIsFoodAC = () => ({
    type: TOOGLE_IS_FOOD
})

export const toogleIsHeadAC = () => ({
    type: TOOGLE_IS_HEAD
})


export default gameReducer;