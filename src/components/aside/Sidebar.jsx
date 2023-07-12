import React from "react";

function Sidebar() {
    return (
        <div className="sidebar">
          <a href="#" class="active">
            <span class="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
          </a>

          <a href="#">
            <span class="material-icons-sharp">person_outline</span>
            <h3>Customers</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">receipt_long</span>
            <h3>Orders</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">insights</span>
            <h3>Analytics</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">mail_outline</span>
            <h3>Messages</h3>
            <span class="message-count">26</span>
          </a>
          <a href="#">
            <span class="material-icons-sharp">inventory</span>
            <h3>Products</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">report_gmailerrorred</span>
            <h3>Reports</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">settings</span>
            <h3>Settings</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">add</span>
            <h3>Add Account</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">logout</span>
            <h3>Log out</h3>
          </a>
        </div>
    );
};

export default Sidebar;