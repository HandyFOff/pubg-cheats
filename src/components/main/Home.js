import React from 'react';

export default function Home() {
    return (
        <div className='home'>
            <div className='container'>
                <div className='home__content'>
                    <h1 className='home__title'>ЧИТЫ НА PUBG ЛУЧШИЕ НА РЫНКЕ БЕЗ БАНА!</h1>
                    <div className='home__line'></div>
                    <p className='home__description'>Лучшие сборки на рынке, проверенные опытом и временем, а также, оптимальное соотношение цены, надежности и производительности</p>
                    <span className='home__description-1'>Самая низкая цена за мегахеш</span>
                    <div className='home__buttons'>
                        <button className='home__buttons-buy btn-buy'>Купить <img src={require('../../assets/arrow.png')}/></button>
                        <button className='home__buttons-video'>Посмотреть видео</button>
                    </div>
                </div>
            </div>
            <div className='home__under'>
                <img src={require("../../assets/home_under.png")} className="home-under"/>
            </div>
        </div>
    )
}