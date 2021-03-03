import React from 'react';
import s from './SoundButtons.module.css';
import { connect } from 'react-redux';
import { toggleBgMusicAC, toggleSoundAC } from '../../../redux/sounds-reducer';

const SoundButtons = (props) => {

    const toggleBgMusicHandler = () => {
        props.toggleBgMusic()
    }

    const toggleSoundHandler = () => {
        props.toggleSound()
    }

    return (
        <div className={s.buttonsContainer}>
            <button onClick={ toggleBgMusicHandler } className={s.button}>music</button>
            <button onClick={ toggleSoundHandler } className={s.button}>sound</button>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        sound: state.sound
    }
}

let mapDispatchToProps =(dispatch) => {
    return {
        toggleBgMusic: () => {
            dispatch(toggleBgMusicAC())
        },
        toggleSound: () => {
            dispatch(toggleSoundAC())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundButtons);


