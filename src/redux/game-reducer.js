const CREATE_FIELD = 'CREATE_FIELD';

let initialState = {
    rows: 10,
    cols: 10,
    grid: []
};

const grid = initialState.grid;

for (let row = 0; row < initialState.rows; row++) {
    for (let col = 0; col < initialState.cols; col++) {
        grid.push({
            row,
            col,
        })
    }
}



const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        // case CREATE_FIELD:
        //     const grid = [];

        //     for (let row = 0; row < state.rows; row++) {
        //         for (let col = 0; col < state.cols; col++) {
        //             grid.push({
        //                 row,
        //                 col,
        //             })
        //         }
        //     }
        //     return {
        //         ...state,
        //         grid: grid
        //     }
        default:
            return state;
    }
}

export const createFieldAC = () => ({
    type: CREATE_FIELD,
})


export default gameReducer;