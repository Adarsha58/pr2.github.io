import React, { Component } from "react";
import "../../assets/css/main.css";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: 2,
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  validate = () => {
    let email = this.state.value.trim();
    let lastFour = email.substring(email.length-4);
    console.log(email, lastFour);
    (email.split('@').length == 2 && email.indexOf('@') > 0 && (lastFour === '.edu' || lastFour === '.com')) ?
        this.setState({validEmail : 1}) :
        this.setState({validEmail : 0})
  };


  render() {
    return (
      <div className="EmailArea">
        <label htmlFor="email">Enter your email:</label>
        <br />
        <input type="text" id="email" name="email" onChange={this.handleChange}/>
        <br />
        <br />
        <input type="submit" value="Submit" onClick={this.validate}/>
        <br />
        <br />

        {this.state.validEmail === 1 ? (
          <div>✅ Email successfully recorded!</div>
        ) : this.state.validEmail === 0 ? (
          <div>❌ Invalid Email addrress !</div>
        ) : null}
      </div>
    );
  }
}

export default Email;
