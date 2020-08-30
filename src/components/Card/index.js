import React from "react";

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
              <button className="btn btn-warning btn-sm">Voir produit</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
    </div>
  );
};

export default Card;
