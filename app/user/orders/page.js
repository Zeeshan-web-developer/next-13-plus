import React from "react";
import Link from "next/link";

function UserOrders(props) {
  // const { orders } = props;
  let orders = [
    {
      id: 1,
      date: "2021-01-01",
      items: [
        { id: 1, name: "Book", price: 10 },
        { id: 2, name: "Pen", price: 5 },
      ],
    },
    {
      id: 2,
      date: "2021-01-02",
      items: [
        { id: 3, name: "Book", price: 10 },
        { id: 4, name: "Pen", price: 5 },
      ],
    },
  ];

  return (
    <div className="">
      <h1>My Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <div className="flex justify-center">
            <Link
              href={`/user/order/${order.id}`}
              className="text-green-500 underline"
            >
              Order #{order.id}
            </Link>
            <p>Date: {order.date}</p>
          </div>
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
