import React from "react";
import "./Chef.css";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans italic">
              Mauris commodo quis imperdiet massa egestas duis lit.
            </p>
          </div>
          <p className="p__opensans italic">
            Facilisis volutpat est velit egestas dui. Consectetur adipiscing
            elit duis tristique sollicitudin nibh.
          </p>
        </div>
        <div className="app__chef-sign">
          <h3 className="p__cormorant">Kevin Luo</h3>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="signature" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
