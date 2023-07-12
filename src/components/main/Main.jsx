import React from "react";
import Insights from "./Insights";
import Orders from "./orders/Orders";

function Main() {
    return (
        <main>
            <h1>Dashboard</h1>
            <div class="date">
               <input type="date" />
            </div>

            <Insights />
            <Orders />




        </main>
    );
};

export default Main;