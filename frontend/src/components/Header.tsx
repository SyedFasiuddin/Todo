import React, { FC } from "react";

const Header: FC = () => {
    let user: boolean = true;
    return (
        <header className="header">
            <div className="logo">Todo</div>
            <ul>
                {user ?
                    <li>Logout</li>
                    : (
                        <>
                            <li>Login</li>
                            <li>Register</li>
                        </>
                    )
                }
            </ul>
        </header>
    )
}

export default Header