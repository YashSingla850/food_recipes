import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Recipes from "./component/Recipes";
import "./Work.css";
import Axios from "axios";
// b4ae194a apiid

// 3fba57ab2570e09d04ff9d41043700fc	—apikey

const Work = () => {
  const [search, setSearch] = useState("orange");
  const [dish, setDish] = useState([]);

  const getDish = async () => {
    const APP_ID = "d9de68f3";
    const APP_KEY = "242176a2b35f77a74d313166ee9cd602";
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setDish(res.data.hits);
  };

  useEffect(() => {
    getDish();
  }, []);

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };
  const onSearchClick = () => {
    getDish();
  };
  return (
    <div className="app">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes dish={dish} />
      </div>
    </div>
  );
};
export default Work;
