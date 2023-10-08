import React from "react";
import "./HomeCard.css";

export default function HomeCard(props) {
  return (
    <>
        <div id="homecompcard1">
          {/* <div id="homecompcard4"><img src={props.img} alt="card_img" id="homecompcard2" /></div> */}
          <div id="homecompcard3">{props.text}</div>
        </div>
    </>
  );
}
