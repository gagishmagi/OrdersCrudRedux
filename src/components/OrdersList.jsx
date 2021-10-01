import { connect } from "react-redux";
// import { CREATE_ORDER } from "../actions/types";
import {createOrder} from '../actions/OrdersAction'

function OrdersList({ orders, dispatch, createOrder }) {
  console.log(orders);
  return (
    <div>
      <h1>Orders List</h1>
      <ul className="orders">
        {orders.map((order) => {
          return (
            <li key={order.id} className="order-item">
              order amount: {order.amount}
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
        createOrder({ id: orders.length + 1, amount: 20 })
        }}
      >
        Add Order
      </button>
    </div>
  );
}

function mapStatetoProps(store) {
  return {
    orders: store.OrdersReducer.orders,
  };
}

export default connect(mapStatetoProps,{ createOrder })(OrdersList);
