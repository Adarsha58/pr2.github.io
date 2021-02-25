import React, { Component } from "react";
import "../../assets/css/main.css";

class Table extends Component {
  render() {
    return (
      <div className="TableArea">
        <h2>Projects</h2>
        <table>
          <tbody>
            <tr>
              <th className="lcol">Name</th>
              <th>Details</th>
              <th>Year</th>
            </tr>
            <tr>
              <td className="lcol">
                <a href="https://github.com/ucsb-cs48-s20/project-s2-t3-slack-bot">
                  Slack Bot
                </a>
              </td>
              <td>
                Developed a system to allocate points and monitor student
                participation within Slack using the Slack API. Recordkeeping
                via reputation points was managed with MongoDB.
              </td>
              <td>2020</td>
            </tr>
            <tr>
              <td className="lcol">
                <a href="https://github.com/Adarsha58/UCSB_Schedule_Maker">
                  Scheduler
                </a>
              </td>
              <td>
                Build a web application that helps UCSB students optimize their
                className schedule based on selected filters. Used Material UI,
                CSS, and Bootstrap for styling the frontend and creating a
                responsive design.
              </td>
              <td>2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
