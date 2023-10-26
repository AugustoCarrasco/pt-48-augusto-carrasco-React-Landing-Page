import React from "react";
import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Details = ({ wear }) => {
  const bagIcon = (
    <FontAwesomeIcon
      icon={faBagShopping}
      style={{
        color: "#000",
        fontSize: "2rem",
        padding: "2rem",
        backgroundColor: "#d7b900",
        borderRadius: "2rem",
      }}
    />
  );

  const heartIcon = (
    <FontAwesomeIcon
      icon={faHeart}
      style={{ fontSize: "2rem", padding: "2rem" }}
    />
  );

  const arrowDown = (
    <FontAwesomeIcon
      icon={faArrowDownLong}
      style={{ fontSize: "2rem", padding: "2rem", transform: "scaleY(2)" }}
    />
  );
  return (
    <>
      <div className="details-description__container">
        <div className="details-description__left">
          <div className="details-description__left__left">
            <span className="text-rotation">Details</span>
            <span>{arrowDown}</span>
          </div>
          <div className="details-description__left__right">
            <div className="details-description__header">
              <span>{wear.brand}</span>
            </div>
            <div className="details-description__body">
              <span>{wear.name} -- </span>
              <span>${wear.price}</span>
            </div>
            <div className="details-description__footer">
              <div
                className="details-description__color"
                style={{
                  backgroundColor: wear.cardColor,
                  filter: "hue-rotate(180deg)",
                }}
              ></div>
              <div
                className="details-description__color"
                style={{ backgroundColor: wear.cardColor }}
              ></div>
              <div
                className="details-description__color"
                style={{
                  backgroundColor: wear.cardColor,
                  filter: "hue-rotate(90deg)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="details-description__right">
          <span>{heartIcon}</span>
          <div className="details-addToCart__container">
            <button>
              <span>{bagIcon}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
