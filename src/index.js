import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// import App from "./App";

class MyTable extends React.Component {
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
          <tr>
            <td>Arti</td>
            <td>Accounts</td>
            <td>6</td>
            <td>Beginner</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      skill: "",
      rating: "",
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
    return (
      <div id="card">
        <h1 style={{ color: "Green" }}>Candidate Form</h1>
        <div id="mypage">
          <form method="POST">
            <label>Enter your name:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              onChange={this.myChangeHandler}
              autoComplete="off"
              validate
            />
            <br />
            <span id="multiple_skill">
              <label>Enter Your Skill:</label>
              <input
                type="text"
                name="skill"
                placeholder="Enter Your Skills"
                autoComplete="off"
                onChange={this.myChangeHandler}
              />
              <label>Rating:</label>
              <select value={this.myChangeHandler}>
                <option value="Select">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <label>Description:</label>
              <textarea
                placeholder="Describe Your Skill"
                max-length="200"
                value={this.myChangeHandler}
              />
            </span>
            <button type="" id="btn" className="button">
              Add More Skill
            </button>
            <button
              type="submit"
              value="submit"
              className="button"
              style={{ margin: "20px" }}
            >
              Save
            </button>
          </form>
        </div>
        <div id="table">
          <MyTable />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById("root"));
