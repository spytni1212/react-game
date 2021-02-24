import Game from './Game';
import { connect } from 'react-redux';
//import { createFieldAC } from '../../redux/game-reducer'

const mapStateToProps = (state) => {
    return {
        gamePage: state.gamePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;