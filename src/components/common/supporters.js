import React from "react";
import img from "../../images/who-supports-broadband.jpg";

const SupportersImage = () => (
  <div>
    <h3>Mayoral Support:</h3>
    <img
      src={img}
      alt="image of table of mayoral candidates who support broadband: Echohawk, Farrell, González, Houston, Langlie, and Sixkiller"
    />
    <sub>
      <a href="https://projects.seattletimes.com/2021/seattle-mayor-candidates-primary-mayoral-election-guide/#/issue/BROADBAND">
        Source
      </a>
    </sub>
  </div>
);

export default SupportersImage;
