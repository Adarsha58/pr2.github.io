import React, { Component } from "react";
import "../assets/css/main.css";

const Tabs = ["Home", "Image", "Video", "Table", "Email"];

class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  handleSelect = (index) => {
    this.setState({ activeTab: index });
    this.props.changeTab(index);
  };

  render() {
    return (
      <nav className="Navbar">
        <div className="lists">
          {Tabs.map((label, index) => (
            <span
              className={`${this.state.activeTab === index ? "active-page" : ""} ${label.toUpperCase()}`}
              key={index}
              onClick={() => this.handleSelect(index)}
            >
              {label}
            </span>
          ))}
        </div>
      </nav>
    );
  }
}

export default TabList;
