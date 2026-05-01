import React, { useState } from "react";
import Toolbar from "./Toolbar";

// 로그인 여부에 따라 toolbar에 적절한 사용자 인터페이스가 표시되도록 함

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16 }}>안녕하세요!</div>
        </div>
    );
}

export default LandingPage;