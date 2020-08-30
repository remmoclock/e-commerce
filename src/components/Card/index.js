import React from "react";
import { Modal } from "../Modal";

const Card = (props) => {
  const { item } = props;
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={
            process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`
          }
          alt="{item.name}"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{item.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                {item.price}€ /{item.unit}
              </p>
              <button
                className="btn btn-warning btn-sm"
                data-toggle="modal"
                data-target={`#${item.ref}`}
              >
                Voir produit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal item={item} />
    </div>
  );
};

export default Card;
