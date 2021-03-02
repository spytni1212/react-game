import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className = {s.header}>
            <span className = {s.gameName}>Snake Game</span>
        </header>
    )
}

export default Header;