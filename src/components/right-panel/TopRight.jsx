import React from "react";


function TopRight() {

 
    return(
        <div className="top">
             
          <button id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button>
          <div className="theme-toggler">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode</span>
          </div>
          <div className="profile">
            <div className="info">
              <p>Hey, <b> Dave</b></p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src="https://assets.website-files.com/619e8d2e8bd4838a9340a810/647c106477f8934b266ba39c_profile-picture-og.webp" alt="profile" />
            </div>
          </div>
        

        </div>
    )
}

export default TopRight;