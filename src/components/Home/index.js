import React from "react";
import SideMenu from "../SideMenu";
import List from "../List";

const Home = (props) => {
  const {
    isFiltering,
    filtered,
    list,
    category,
    loadCategory,
    updateCart,
  } = props;
  return (
    <div>
      <div className="container">
        <div className="row">
          <SideMenu loadCategory={loadCategory} category={category} />
          <div className="col-sm">
            <div className="row">
              <List
                data={isFiltering ? filtered : list[category]}
                category={category}
                updateCart={updateCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
