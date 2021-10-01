import { CREATE_ORDER, GET_ORDERS } from "./types"


export const createOrder = (order_data) => (dispatch) =>{
    console.log(order_data)
    dispatch({
        type: CREATE_ORDER, payload: order_data 
    })
} 

export const getOrders = () => (dispatch) =>{
    dispatch({
        type: GET_ORDERS 
    })
}
