import { CREATE_ORDER, DELETE_ORDER, GET_ORDERS } from "./types"
import axios from 'axios'

export const createOrder = (order_data) => async (dispatch) =>{
    // console.log(order_data)

    try {
        const res = await axios.post('http://localhost:5000/orders', order_data)
        const order = res.data
        dispatch({
             type: CREATE_ORDER, 
             payload: order 
        })


    } catch (error) {
        console.log(error)
    }

   
} 

export const getOrders = () => async (dispatch) =>{
    // console.log("In get Orders")

    try {
        const res = await axios.get('http://localhost:5000/orders')
        const orders = res.data

        dispatch({
            type: GET_ORDERS ,
            payload: orders
        })
        
    } catch (error) {
        console.log(error)
    } 

   
}


export const deleteOrder = (order) => async (dispatch) =>{
    // console.log(order)

    try {
        const res = await axios.delete(`http://localhost:5000/orders/${order.id}`)
        // console.log(res);
        dispatch({
             type: DELETE_ORDER, 
             payload: order
        })


    } catch (error) {
        console.log(error)
    }

   
}