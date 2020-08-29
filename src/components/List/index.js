import React from "react";
import Card from '../Card';

const List = props => {
    const { data } = props
    const fruits = data[0]

    return (
        <div className="col-sm">
        <div className="row">
          {fruits.map(fruit => <Card key={fruit.ref} fruit={fruit} />)}
        </div>
      </div>
    );
  };

  export default List;
  