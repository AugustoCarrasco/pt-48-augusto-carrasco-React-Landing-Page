import React, { useState } from "react";
import "./Navbar.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faArrowLeft,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const slidersIcon = <FontAwesomeIcon icon={faSliders} />;
const arrowIcon = <FontAwesomeIcon icon={faArrowLeft} />;
const bagIcon = (
  <FontAwesomeIcon
    icon={faBagShopping}
    style={{ color: "#dedbec", "fontSize": "1.5rem" }}
  />
);

const Navbar = () => {
  const [womenState, setWomenState] = useState(false);
  const [menState, setMenState] = useState(false);
  const [childrenState, setChildrenState] = useState(false);

  const clickedWomenChip = () => {
    setWomenState(!womenState);
  };
  const clickedMenChip = () => {
    setMenState(!menState);
  };
  const clickedChildrenChip = () => {
    setChildrenState(!childrenState);
  };
  return (
    <>
      <div className="navbar__container">
        <div className="navbar-back-filter__container">
          <Stack direction="row" spacing={2}>
            <button className="navbar-back__button">
              {arrowIcon}
              <span> Back</span>
            </button>
            <button className="navbar-filter__button">{slidersIcon}</button>
            <Chip
              label="Women"
              variant={womenState ? "filled" : "outlined"}
              onClick={clickedWomenChip}
            />
            <Chip
              label="Men"
              variant={menState ? "filled" : "outlined"}
              onClick={clickedMenChip}
            />
            <Chip
              label="Children"
              variant={childrenState ? "filled" : "outlined"}
              onClick={clickedChildrenChip}
            />
          </Stack>
        </div>
        <div className="nabvar-cart__container">
          <button className="nabvar-cart__button">
            <span>{bagIcon}</span>
            <span> Cart</span>
            <span className="nabvar-cart__AddedToCart">2</span>
          </button>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
