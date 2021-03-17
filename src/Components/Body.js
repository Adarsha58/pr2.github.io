import React, { Component } from "react";
import Text from "./Tabs/Text";
import Image from "./Tabs/Image";
import Video from "./Tabs/Video";
import Table from "./Tabs/Table";
import Email from "./Tabs/Email";
import ZoomMeeting from './Tabs/ZoomMeeting';
import "../assets/css/main.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplay: "none",
      modalSrc: "",
    };
  }

  handleClick = (event, src) => {
    event.preventDefault();
    this.setState({ modalDisplay: "block", modalSrc: src });
  };

  on = (e) => {
    e.stopPropagation();
  };

  off = () => {
    this.setState({ modalDisplay: "none" });
  };

  render() {
    return (
      <div>
        {this.props.activeTab === 0 ? (
          <Text />
        ) : this.props.activeTab === 1 ? (
          <Image handleClickModal={this.handleClick} />
        ) : this.props.activeTab === 2 ? (
          <Video handleClickModal={this.handleClick} />
        ) : this.props.activeTab === 3 ? (
          <Table />
        ) : this.props.activeTab === 4 ? (
          <Email />
        ) : <ZoomMeeting/>}

        <div
          id="modal"
          style={{ display: this.state.modalDisplay }}
          onClick={this.off}
        >
          {this.props.activeTab === 1 ? (
            <img id="imgSrc" src={this.state.modalSrc} onClick={this.on} />
          ) : this.props.activeTab === 2 ? (
            <iframe
              id="videoSrc"
              frameBorder="0"
              allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              src = {this.state.modalSrc}
              allowFullScreen
            ></iframe>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Body;
