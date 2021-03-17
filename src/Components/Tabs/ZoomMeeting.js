import React, { Component } from "react";
import "../../assets/css/main.css";
import CreateMeetings from './Containers/CreateMeetings';
import AllMeetings from './Containers/AllMeetings';

class ZoomMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 0,
      buttonName: "Create a Meeting",
    };
  }

  onClickHandler = (currbuttonNum) => {
    if (currbuttonNum === 0) {
      this.setState({ button: 1, buttonName: "Full Schedule" });
    } else {
      this.setState({ button: 0, buttonName: "Create a Meeting" });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="zoom_container">
          <div className="grid-item">
            <h1 className="managerFont">Zoom Meeting Manager</h1>
          </div>
          <div className="grid-item">
            <button
              className="button"
              onClick={() => this.onClickHandler(this.state.button)}
            >
              {this.state.buttonName}
            </button>
          </div>
        </div>
        {this.state.button == 0 ? 
            <AllMeetings/> :
            <CreateMeetings/>
        }
      </div>
    );
  }
}

export default ZoomMeeting;
