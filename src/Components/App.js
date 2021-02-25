import React, { Component } from "react";
import Body from "./Body";
import TabList from "./TabList";
import "../assets/css/main.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActiveTab: 0,
      scrollTop: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (
      document.body.scrollTop > 0.25 * window.innerHeight ||
      document.documentElement.scrollTop > 0.25 * window.innerHeight
    ) {
      this.setState({ scrollTop: true });
    } else {
      this.setState({scrollTop: false});
    }
  }

  goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  handleClick = (tab) => {
    this.setState({ ActiveTab: tab });
  };

  render() {

    const style = {
      zIndex: '100',
      position: 'fixed',
      bottom: 0,
      right: '1.5vw',
      width: '3em',
      height: '2em',
      bordeRadius: '5px',
      fontSize: '1.5em',
      backgroundColor: 'rgb(141, 245, 120)',
      color: 'rgb(216, 0, 0)',
      border: '1px solid black'
    };

    return (
      <div className="MainPageContainer">
        <TabList changeTab={this.handleClick} />

        {this.state.scrollTop ? (
          <button onClick={this.goTop} style={style} title="Go to top">
            Top
          </button>
        ) : null}
        <Body activeTab={this.state.ActiveTab} />
      </div>
    );
  }
}

export default App;
