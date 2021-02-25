import React, { Component } from "react";
import "../../assets/css/main.css";

const videoSrcs = [
  "https://www.youtube.com/embed/5qap5aO4i9A",
  "https://www.youtube.com/embed/cRNypdYQoWk",
  "https://www.youtube.com/embed/cbe4tXx7mnc",
  "https://www.youtube.com/embed/5qap5aO4i9A",
  "https://www.youtube.com/embed/cRNypdYQoWk",
  "https://www.youtube.com/embed/cbe4tXx7mnc",
];

class Video extends Component {
  render() {
    return (
      <div className="VideoArea">
        {videoSrcs.map((src, i) => {
          return (
            <div key={i} onClick={(e) => this.props.handleClickModal(e, src)}>
              <div className="overlay"></div>
              <iframe
                width="1237"
                height="696"
                src={src}
                frameBorder="0"
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Video;
