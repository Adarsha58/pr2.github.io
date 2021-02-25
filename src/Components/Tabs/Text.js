import React, { Component } from "react";
import "../../assets/css/main.css";
import myImage from "../../assets/images/my.jpg"

class Text extends Component {
  render() {
    return (
      <div className="Introduction">
        <div className="MyImage">
          <img src={myImage} alt="MyImage" />
        </div>
        <div className="MyBio">
          <p>
            The hero is a pixie from Southend-on-Sea who is particularly good at
            magic. The nemesis is a pixie who doesn't recycle. The nemesis gets
            the upper hand and the hero retires from heroics.A waiter from
            Chester is delighted when she gets the chance to take part in the
            final of a dancing competition. However, her chances are scuppered
            when her dinner is spiked. After the drama, the waiter realises
            there is more to life than winning a dancing competition and goes on
            a picninc with her grandmother instead.
          </p>
        </div>
      </div>
    );
  }
}

export default Text;
