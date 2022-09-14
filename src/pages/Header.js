import React from 'react';
import Popup from '../custom/popup/Popup';

export default function Header() {
    
    const [active, setActive] = React.useState(false);

    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled !== 0){document.querySelector('.header').style.backgroundColor = 'rgba(25, 25, 25, 0.97)';}
        else{document.querySelector('.header').style.backgroundColor = 'rgba(255, 255, 255, 0)';};
    };

    return (
        <header className='header'>
            <div className='header__container'>
                {window.innerWidth <= 992 ? <div className="header__burger burger" onClick={() => setActive(true)}>
                    <div></div>
                    <div></div>
                </div> : null}
                <Popup active={active} setActive={setActive} className="burger__popup">
                    <div className="header__burger burger" onClick={() => setActive(false)}>
                        <div></div>
                        <div></div>
                    </div>
                    <li className='nav__item'><a href='#'>ГЛАВНАЯ</a></li>
                    <li className='nav__item'><a href='#'>ТАРИФЫ</a></li>
                    <li className='nav__item'><a href='#'>ОТЗЫВЫ</a></li>
                    <li className='nav__item'><a href='#'>FAQ</a></li>
                    <li className='nav__item'><a href='#'>КОНТАКТЫ</a></li>
                    <li className='nav__item'><a href='#'>ФУНКЦИОНАЛ</a></li>
                    <button className='burger__login'>ВОЙТИ</button>
                </Popup>
                <div className='header__logo'>
                    <span>Logo</span>
                </div>
                <nav className='header__nav nav'>
                    <li className='nav__item'><a href='#'>ГЛАВНАЯ</a></li>
                    <li className='nav__item'><a href='#'>ТАРИФЫ</a></li>
                    <li className='nav__item'><a href='#'>ОТЗЫВЫ</a></li>
                    <li className='nav__item'><a href='#'>FAQ</a></li>
                    <li className='nav__item'><a href='#'>КОНТАКТЫ</a></li>
                    <li className='nav__item'><a href='#'>ФУНКЦИОНАЛ</a></li>
                </nav>
                <div className='header__settings settings'>
                    <select className='settings__lang'>
                        <option value='ru' id='ru-lang'>RU</option>
                        <option value='en'>EN</option>
                        <option value='ua'>UA</option>
                    </select>
                    <div className='settings__account'>
                        <img src={require('../assets/user.png')}></img>
                    </div>
                </div>
            </div>
        </header>
    )
}