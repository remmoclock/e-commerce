import React from "react";
import Card from "../Card";

const List = (props) => {
  const { data, addToCart, updateCart } = props;

  return (
    <div className="col-sm">
      <div className="row">
        {data.map((item) => (
          <Card
            key={item.ref}
            item={item}
            addToCart={addToCart}
            updateCart={updateCart}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
