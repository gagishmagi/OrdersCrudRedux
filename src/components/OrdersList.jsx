import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
// import { CREATE_ORDER } from "../actions/types";
import { createOrder, getOrders, deleteOrder } from "../actions/OrdersAction";

function OrdersList({ dispatch, createOrder, getOrders,deleteOrder  }) {
  const orders = useSelector((state) => state.OrdersReducer.orders);

  useEffect(() => 
    getOrders()
  , []);

  // console.log(orders);
  return (
    <div>
      <h1>Orders List</h1>
      <ul className="orders">
        {orders.map((order) => {
          return (
            <li key={order.id} className="order-item">
              order amount: {order.amount}
              <button
                onClick={() => {
                  //   dispatch({
                  //     type: CREATE_ORDER,
                  //     payload: { id: orders.length + 1, amount: 20 },
                  //   });
                  deleteOrder({ id: order.id });
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          //   dispatch({
          //     type: CREATE_ORDER,
          //     payload: { id: orders.length + 1, amount: 20 },
          //   });
          createOrder({ id: orders.length + 1, amount: 20 });
        }}
      >
        Add Order
      </button>
     
    </div>
  );
}

// function mapStatetoProps(store) {
//   return {
//     orders: store.OrdersReducer.orders,
//   };
// }

export default connect(null, { createOrder, getOrders, deleteOrder })(OrdersList);
