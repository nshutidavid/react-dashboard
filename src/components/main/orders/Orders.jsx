import React from "react";


function Orders() {

  const DataForOrders = [
    {
      productName: 'Foldable Mini Drone',
      productNumber: '85631',
      paymentStatus: 'Due',
      shipping: 'pending',
    },
  
    {
      productName: 'LARVENDER KF102 Drone',
      productNumber: '363378',
      paymentStatus: 'Refunded',
      shipping: 'Declined',
    },
  
    {
      productName: 'Ruko F11 pro drone',
      productNumber: '49347',
      paymentStatus: 'Due',
      shipping: 'pending',
    },
  
    {
      productName: 'Drone with camera Drone',
      productNumber: '96996',
      paymentStatus: 'Paid',
      shipping: 'Delivered',
    },
  
    {
      productName: 'GPS 4k Drone',
      productNumber: '22821',
      paymentStatus: 'Paid',
      shipping: 'Delivered',
    },
  
    {
      productName: 'DJ1 Air 25',
      productNumber: '81475',
      paymentStatus: 'Due',
      shipping: 'pending',
    },
  
    {
      productName: 'Lonzene Drone',
      productNumber: '00482',
      paymentStatus: 'Paid',
      shipping: 'Delivered',
    },
  ];  


    return (
        <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {DataForOrders.map((DataForOrder, index) => (
          <tr key={index}>
            <td>{DataForOrder.productName}</td>
            <td>{DataForOrder.productNumber}</td>
            <td>{DataForOrder.paymentStatus}</td>
            <td>{DataForOrder.shipping}</td>
          </tr>
        ))}
          </tbody>
        </table>
        <button className="button">Show All</button>
        
      </div>
    );
};

export default Orders;