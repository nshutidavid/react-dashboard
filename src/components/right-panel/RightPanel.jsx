import React from "react";
import TopRight from "./TopRight";
import Updates from "./Updates";
import Sales from "./Sales";

function RightPanel() {
    return (
        <div className="right">
            <TopRight />
            <Updates />
            <Sales />

        </div>
    );
};


export default RightPanel;
