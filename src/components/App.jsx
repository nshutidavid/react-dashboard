import React from "react";
import Aside from "./aside/Aside";
import Main from "./main/Main";
import RightPanel from "./right-panel/RightPanel";

function App() {
    return (
    <div className="container">

    <Aside />
    <Main />
    <RightPanel />
    </div>
    );
};

export default App