import React from 'react';

function UserOrders(props) {
    // const { orders } = props;
    let orders = [
        {
            id: 1,
            date: '2021-01-01',
            items: [
                { id: 1, name: 'Book', price: 10 },
                { id: 2, name: 'Pen', price: 5 },
            ],
        },
        {
            id: 2,
            date: '2021-01-02',
            items: [
                { id: 3, name: 'Book', price: 10 },
                { id: 4, name: 'Pen', price: 5 },
            ],
        },
    ]

  return (
    <div>
      <h1>My Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>Order #{order.id}</h2>
          <p>Date: {order.date}</p>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UserOrders;
