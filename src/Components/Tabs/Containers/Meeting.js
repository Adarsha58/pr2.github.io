import React, {Component} from 'react';

class Meeting extends Component {
    render() {
        let myStyle = null;
        if(this.props.important) {
            myStyle = {
                color: "white",
                background: "hsl(180deg 100% 33%)"
            }
        }
        return(
            <div className="meeting-item" style= {myStyle} onClick={(event) => this.props.handleDoubleClick(event, this.props)}>
                <div className="meeting-grid">
                    <div className="grid-item">
                        <h3 className="meeting-header">{this.props.title}</h3>
                        <time>{this.props.day}</time><br/>
                        <a href={this.props.textInfor}>{this.props.textInfor}</a>
                    </div>
                    <div className="grid-item">
                        <button className="meeting-button" onClick={(event) => {this.props.clickHandler(event, this.props.id)}}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Meeting;