import React from "react";

const Card = props => {
    const { fruit } = props
    return (
      <div className="col-sm-4">
        <div className="card">
          <img
            width="170"
            height="170"
            src={process.env.PUBLIC_URL + `/assets/${fruit.category}/${fruit.image}`}
            alt="{fruit.name}"
          />
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <h4>{fruit.name}</h4>
              </div>
              <div className="col-sm-6">
                <p>
                  {fruit.price}€ /{fruit.unit}
                </p>
                <button className="btn btn-warning btn-sm">view product</button>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
      </div>
    );
  };

  export default Card;
