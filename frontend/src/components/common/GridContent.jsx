import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import React from "react";
import Slider from "react-slick";
import { settings } from "./settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GridContent = ({ category }) => {
  const dispatch = useDispatch();
  return (

    <div
      className="categoty-flex"
      onClick={() => dispatch(push("/places?category=" + category.id))}
    >
      <img src={category.image} alt="" />
    </div>

  );
};

export default GridContent;
