import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../app/redux/actions";
import { removeFromCart } from "../../app/redux/actions";

const Row = (props) => {
  const { id, quantity, details } = props.item;
  const item = details;
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch();
  const update = (item, quantity) => {
    dispatch(updateCart(item, quantity));
  };
  const remove = id => {
    dispatch(removeFromCart(id));
  };
  return (
    <tr>
      <td>
        <img
          width="70"
          height="70"
          src={
            process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`
          }
          alt={item.name}
        />
      </td>
      <td>{item.ref}</td>
      <td>€{item.price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              if (qty > 1) {
                setQty(qty - 1);
                update(item, qty);
              }
            }}
          >
            -
          </button>
          <span className="btn btn-light">{qty}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setQty(qty + 1);
              update(item, qty);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>€{quantity * item.price}toFixed(2) </td>
      <td>
        <button
          type="button"
          className="btn btn-danger remove"
          onClick={() => remove(item)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default Row;
