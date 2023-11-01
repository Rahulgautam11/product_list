
export const ProductState = (data) => (dispatch) => {

    dispatch({
        type: 'PRODUCT_STATE',
        payload: data,
    })

}
export const DeleteProduct = (data) => (dispatch) => {

    dispatch({
        type: 'PRODUCT_DELETE',
        payload: data
    })
}
export const UpdateState = (data) => (dispatch) => {
    dispatch({
        type: 'PRODUCT_UPDATE_STATE',
        payload: data,

    })
}
export const updatevalue = (data) => (dispatch) => {
    dispatch({
        type: "VALUE_UPDATE",
        payload: data
    })
    dispatch({
        type: 'PRODUCT_UPDATE_STATE',
        payload: {},

    })
}



// export const updateId = (_id) => (dispatch) => {
//     dispatch({
//         type: 'PRODUCT_ID',
//         payload: _id,

//     })
// }
// export const statecheck = (condition) => (dispatch) => {
//     dispatch({
//         type: 'STATE_CHECK',
//         payload: condition,

//     })
// }

// export const stateFalse = (stateFalse) => (dispatch) => {
//     dispatch({
//         type: 'STATE_False',
//         payload: stateFalse,

//     })
// }