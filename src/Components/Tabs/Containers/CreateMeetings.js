import React, { Component } from "react";
import axios from "axios";

const urlEndPoint = "http://localhost:5000/tasks";
class CreateMeetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      date: this.props.date,
      zoomLink: this.props.zoomLink,
      important: this.props.important,
      validateTitle: true,
      validateDate: true,
      validateZoom: true,
      success: false,
    };
  }


  onClickHandler = (event) => {
    if (event.target.id === "title") {
      this.setState({ title: event.target.value });
    } else if (event.target.id == "date") {
      this.setState({ date: event.target.value });
    } else if (event.target.id === "zoomLink") {
      this.setState({ zoomLink: event.target.value });
    } else {
      this.setState({ important: event.target.checked });
    }
  };

  isFuture = () => {
    if (this.state.date.length === 0 || !this.state.date) return false;
    var now = new Date();
    var utcString = now.toISOString().substring(0, 19);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var currlocalDatetime =
      year +
      "-" +
      (month < 10 ? "0" + month.toString() : month) +
      "-" +
      (day < 10 ? "0" + day.toString() : day) +
      "T" +
      (hour < 10 ? "0" + hour.toString() : hour) +
      ":" +
      (minute < 10 ? "0" + minute.toString() : minute);
    return this.state.date > currlocalDatetime;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    var validated = true;

    const validateTitle = this.state.title.length === 0 || this.state.title.length > 30 ? 0 : 1;
    const validateZoom = this.state.zoomLink.indexOf("zoom") === -1 ? 0 : 1;
    const validateDate = this.isFuture();
    const success = validateTitle && validateZoom && validateDate;

    if (success) {
      const toBePosted = {
        id: new Date().toString(),
        important: this.state.important,
        title: this.state.title,
        day: this.state.date,
        textInfor: this.state.zoomLink,
      };

      if (this.props.updateHandler) {
        this.props.updateHandler(event, toBePosted);
      } else {
        await axios.post(urlEndPoint, toBePosted);
      }
    }

    this.setState({ validateDate, validateZoom, validateTitle, success });
  };

  render() {
    return (
      <div className="meeting-form">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="title">Title:</label>
          <br />
          &nbsp;
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Add task"
            defaultValue={this.state.title}
            onChange={(e) => this.onClickHandler(e)}
          />
          <br />
          <br />
          <label htmlFor="date">Time:</label>
          <br />
          &nbsp;
          <input
            type="datetime-local"
            id="date"
            name="date"
            defaultValue={this.state.date}
            onChange={(e) => this.onClickHandler(e)}
          />
          <br />
          <br />
          <label htmlFor="zoomLink">Zoom Link:</label>
          <br />
          &nbsp;
          <input
            type="url"
            id="zoomLink"
            name="zoomLink"
            placeholder="Zoom Link to the meeting"
            defaultValue={this.state.zoomLink}
            onChange={(e) => this.onClickHandler(e)}
          />
          <br />
          <br />
          <h3>
            Important &nbsp; &nbsp;{" "}
            <input
              type="checkbox"
              id="important"
              defaultChecked={this.state.important}
              onChange={(e) => this.onClickHandler(e)}
            />
          </h3>
          {this.state.validateTitle ? null : (
            <div>❌ Title must be within 30 characters !</div>
          )}
          {this.state.validateDate ? null : (
            <div>❌ Only future dates are allowed !</div>
          )}
          {this.state.validateZoom ? null : <div>❌ Zoom Link Invalid !</div>}
          {this.state.success ? (
            <div>✅ Database sucessfully updated !</div>
          ) : null}
          <br />
          <br />
          <input
            type="submit"
            className="save_button"
            value="Save Information"
            onChange={(e) => this.onClickHandler(e)}
          />
        </form>
      </div>
    );
  }
}

export default CreateMeetings;
