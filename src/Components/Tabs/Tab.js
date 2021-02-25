import React, {Component} from 'react'

class Tab extends Component {
    render() {
        return(
            <span
              className={`${this.props.activeTab === this.props.index ? "active-page" : ""} ${this.props.name.toUpperCase()}`}
              key={this.props.index}
              onClick={() => this.props.handleSelect(this.props.index)}
            >
              {this.props.name}
            </span>
        );
    }
}

export default Tab;