import React, { Component } from "react";
import "../../assets/css/main.css";

//images
import elephant from "../../assets/images/elephant.jpg";
import cat from "../../assets/images/cat.jpg";
import duck from "../../assets/images/duck.jpg";
import mario from "../../assets/images/mario.jpg";
import sad from "../../assets/images/sad.jpg";
import something from "../../assets/images/something.jpg";
import sunset from "../../assets/images/sunset.jpg";
import trees from "../../assets/images/trees.jpg";
import mountain from "../../assets/images/mountain.jpg";
import cloud from "../../assets/images/cloud.jpg";

const images = [
  elephant,
  cat,
  duck,
  mario,
  sad,
  something,
  sunset,
  trees,
  mountain,
  cloud,
  cat,
  duck,
  mario,
  sad,
  something,
  mario,
  sad,
  something,
];

class Image extends Component {
  render() {
    return (
      <div className="ImageArea">
        {images.map((source, index) => {
          return (
            <div
              key={index}
              onClick={(event) => this.props.handleClickModal(event, source)}
            >
                <img src={source} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Image;
