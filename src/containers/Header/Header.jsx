import React from "react";
import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Donec adipiscing tristique risus nec feugiat in fermentum. Feugiat sed
          lectus vestibulum mattis ullamcorper. Lectus proin nibh nisl
          condimentum id.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
