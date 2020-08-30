import React, { useState } from "react";

const SideMenu = ({loadCategory}) => {
  const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"];
  

  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index} onClick={() => loadCategory(index)}>
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
