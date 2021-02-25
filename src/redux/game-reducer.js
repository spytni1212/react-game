const SET_FIELD = 'SET_FIELD';
const SET_FOOD = 'SET_FOOD';
const TOOGLE_IS_FOOD = 'TOOGLE_IS_FOOD';


let initialState = {
    rows: 10,
    cols: 10,
    field: [],
    food: {}
};


const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FIELD: 
            return { ...state, field: action.field }
        case SET_FOOD:
            return { ...state, food: action.foodCoordinates }
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

export const toogleIsFoodAC = () => ({
    type: TOOGLE_IS_FOOD
})


export default gameReducer;