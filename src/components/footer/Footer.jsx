import React from 'react';
import s from './Footer.module.css'

const Footer = (props) => {
    return (
        <div className={s.footer}>
            <p>© 2021</p>
            <a href='https://github.com/spytni1212'><div className={s.github}></div></a>
            <a href='https://rs.school/js/'><div className={s.rsschool}></div></a>
        </div>
    )
}

export default Footer;