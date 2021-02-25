import React, { Component } from "react";
import "../assets/css/main.css";
import Tab from './Tabs/Tab';

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
    //array of TabComponents elements
    const TabsComponents = Tabs.map((label, index) => {
     return (<Tab key={index} name={label} index={index} handleSelect={this.handleSelect} activeTab={this.state.activeTab}/>); 
    });

    return (
      <nav className="Navbar">
        <div className="lists">
          { TabsComponents.map((tab) => tab) }
        </div>
      </nav>
    );
  }
}

export default TabList;
