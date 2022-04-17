import React, { FC } from "react";

const Header: FC = (props) => {

    const handleLogout = () => {
        localStorage.removeItem("token")
        props.userStatus()
    }

    let user: boolean = props.user;
    return (
        <header className="header">
            <div className="logo">Todo</div>
            <ul>
                {user ?
                    <li>
                        <button className="btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                    : (
                        <li>
                            <button className="btn" onClick={props.userStatus}>
                                Login
                            </button>
                        </li>
                    )
                }
            </ul>
        </header>
    )
}

export default Header