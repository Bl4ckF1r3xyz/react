import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

export default function Divider() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUserInfo(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user info from localStorage:", e);
            }
        }
    }, []);

    console.log(userInfo);



    return (


                <div  className="lk-content">
                    <aside className="sidebar">
                        <div className="user-profile">
                            <div className="user-initials">
                                {userInfo.firstname && userInfo.lastname ? `${userInfo.firstname[0]}${userInfo.lastname[0]}` : 'N/A'}
                            </div>
                            <div className="user-details">
                                <div className="user-name">
                                    {userInfo.firstname ? userInfo.firstname : 'Имя'} {userInfo.lastname ? userInfo.lastname : 'Фамилия'}
                                </div>
                                <div className="user-company">
                                    {userInfo.company ? userInfo.company : 'Компания'}
                                </div>
                                <div className="user-phone">
                                    {userInfo.phone_number ? userInfo.phone_number : 'Телефон'}
                                </div>
                            </div>
                        </div>
                        <div className="menu">
                            <div className="menu-item "><Link to="/LK">История перевозок</Link></div>
                            <div className="menu-item">
                                <Link to="/LKDop">Ближайшие перевозки</Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/LKN">Настройки</Link>
                            </div>
                        </div>
                    </aside>
                </div>


    )
}