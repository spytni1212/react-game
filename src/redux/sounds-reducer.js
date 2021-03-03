const TOGGLE_BGMUSIC = 'TOGGLE_BGMUSIC'
const TOGGLE_SOUND = 'TOGGLE_SOUND'

let initialState = {
    backgroundMusic: false,
    eatingSound: false
}

const soundReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BGMUSIC:
            return { ...state, backgroundMusic: !state.backgroundMusic }
        case TOGGLE_SOUND:
            return { ...state, eatingSound: !state.eatingSound }
        default:
            return state
    }
}

export const toggleBgMusicAC = () => ({type: TOGGLE_BGMUSIC})
export const toggleSoundAC = () => ({type: TOGGLE_SOUND})


export default soundReducer