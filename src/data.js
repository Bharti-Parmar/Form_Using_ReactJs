import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./index.html";

// import App from "./App";

class FormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      skill: "",
      rating: "Select",
      description: ""
    };
  }

  myChangeHandler = event => {
    let nam = event.target.name;
    let skills = event.target.value;
    let rating = event.target.value;
    let text = event.target.value;
    this.setState({ [nam]: skills, rating, text });
  };
  render() {
    const mystyle = {
      color: "Red",
      margin: "10px",
      fontWeight: "bold",
      fontFamily: "Arial",
      size: "15px"
    };
    const table = {
      border: "2px solid grey",
      padding: "10px",
      margin: "auto"
    };
    return (
      <table style={table}>
        <caption style={mystyle}>Form Data</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Skill</th>
            <th scope="col">Rating</th>
            <th scope="col">Summary</th>
          </tr>
        </thead>
        <tbody id="data">
          <tr>
            <td>Bharti</td>
            <td>Bootstrap</td>
            <td>7</td>
            <td>Intermediate</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

ReactDOM.render(<FormData />, document.getElementById("candidate_data"));
