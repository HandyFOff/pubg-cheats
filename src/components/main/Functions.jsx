import React from "react";
import { ReactComponent as Arrow } from "./thin_big_right.svg";

export default function Functions() {
    return (
        <div className="functions">
            <div className="container">
                <div className="functions__slider slider">
                    <div className="slider__devices devices">
                        <div className="devices-windows os">
                            <img src={require("../../assets/windows.png")}/>
                            <span>Windows</span>
                        </div>
                        <div className="devices-android os">
                            <img src={require("../../assets/android.png")}/>
                            <span>Android</span>
                        </div>
                        <div className="devices-ios os">
                            <img src={require("../../assets/ios.png")}/>
                            <span>iOS</span>
                        </div>
                    </div>
                    <img src={require("../../assets/phone.png")}/>
                    <div className="slider__arrows">
                        <Arrow className="arrow" fill="current"/>
                        <Arrow className="arrow" fill="current"/>
                    </div>
                </div>
                <div className="functions__desc desc">
                    <h1 className="desc__title">ФУНКЦИОНАЛ</h1>
                    <p className="desc__subtitle">Уникальный чит на iOS подойдет для всех устройств<br/>начиная от айфона 4S+.</p>
                    <ul className="desc__cheats cheats">
                        <li className="cheats-item"><b>WallHack</b> - обнаруживает противников сквозь стены.</li>
                        <li className="cheats-item"><b>AntiRecoil</b> - отключает отдачу на любом оружие.</li>
                        <li className="cheats-item"><b>Aimbot</b> - автоматически наводит прицел на противника.</li>
                        <li className="cheats-item"><b>Drop</b> - показывает топовые вещи сквозь стены.</li>
                    </ul>
                    <div className="desc__attention attention">
                        <img src={require('../../assets/warn.png')}/>
                        <span className="attention-text">Рекомендуем, оставить стандартные параметры в чите</span>
                    </div>
                    <div className="desc__buttons">
                        <button className="desc__buy-btn btn-buy">Купить <img src={require('../../assets/thin_big_right2.png')}/></button>
                        <button className="desc__video-btn">Посмотреть видео <img src={require('../../assets/play.png')}/></button>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}