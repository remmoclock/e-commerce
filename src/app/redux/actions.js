/* Actions Types  */

export const actions = {
    ADD_TO_CART: "ADD_TO_CART ",
    UPDATE_CART: "UPDATE_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
}

/* Actions Creator  */

const uid = () => Math.random().toString(34).slice(2)
export function addtoCart(item, quantity) {
    return {
        type: actions.ADD_TO_CART,
        payload: {id: uid(), quantity: quantity, details: item}
    }
} 

export function updateCart(item, quantity) {
    return {
        type: actions.UPDATE_CART,
        payload: {item: item , quantity}
    }
}

export function removeFromCart(id) {
    return {
        type: actions.REMOVE_FROM_CART,
        payload: id
    }
}