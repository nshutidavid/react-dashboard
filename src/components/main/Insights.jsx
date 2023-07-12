import React from "react";


function Insights() {
    return (
        <div className="insights">
        <div className="sales">
          <span class="material-icons-sharp">analytics</span>
          <div className="middle">
            <div className="left">
              <h3>Total Sales</h3>
              <h4>25,000,000 Rwf</h4>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="36" r="36"></circle>
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 hours</small>
        </div>
        
        <div className="expenses">
          <span className="material-icons-sharp">bar_chart</span>
          <div className="middle">
            <div className="left">
              <h3>Total Expenses</h3>
              <h4>14,160,000 Rwf</h4>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="36" r="36"></circle>
              </svg>
              <div className="number">
                <p>62%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 hours</small>
        </div>
       

        <div className="income">
          <span className="material-icons-sharp">stacked_line_chart</span>
          <div className="middle">
            <div className="left">
              <h3>Total Incomes</h3>
              <h4>10,800,000 Rwf</h4>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="36" r="36"></circle>
              </svg>
              <div className="number">
                <p>44%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 hours</small>
        </div>
        
      </div>

    )
};
export default Insights