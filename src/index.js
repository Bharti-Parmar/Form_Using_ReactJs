import React from "react";
import ReactDOM from "react-dom";
// import FormData from "./data.js";
import AddSkill from "./skill.js";
import "./styles.css";

// import App from "./App";
// const mystyle = {
//   color: "Red",
//   margin: "10px",
//   fontWeight: "bold",
//   fontFamily: "Arial",
//   size: "15px"
// };
// const table = {
//   border: "2px solid grey",
//   padding: "10px",
//   margin: "auto"
// };
// const MyTable = props => {
//   return (
//     <table style={table}>
//       <caption style={mystyle}>Form Data</caption>
//       <thead>
//         <tr>
//           <th scope="col">Name</th>
//           <th scope="col">Skill</th>
//           <th scope="col">Rating</th>
//           <th scope="col">Summary</th>
//         </tr>
//       </thead>
//       <tbody id="data">
//         <tr>
//           <td>Bharti</td>
//           <td>Bootstrap</td>
//           <td>7</td>
//           <td>Intermediate</td>
//         </tr>
//         <tr>
//           <td>Arti</td>
//           <td>Accounts</td>
//           <td>6</td>
//           <td>Beginner</td>
//         </tr>
//         {/* <tr>
//           <td></td>
//           <td>{props.skill.join(", ")}</td>
//           <td>{props.rating.join(", ")}</td>
//           <td>{props.description.join(", ")}</td>
//         </tr> */}
//       </tbody>
//     </table>
//   );
// };

// function skills() {
// var username = document.getElementById("username");
// var skill = document.getElementById("skill");
// var rating = document.getElementById("rating");
// var description = document.getElementById("description");
// }

class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      skills: "",
      rating: null,
      description: ""
    };
    // this.setState({});
  }
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
          <tr>
            <td>{this.state.username}</td>
            <td>{this.props.skill.join(", ")}</td>
            <td>{this.props.rating}</td>
            <td>{this.props.description}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class MyForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: "",
  //     skillList: [
  //       // {
  //       //   skill: "c",
  //       //   rating: 4,
  //       //   description: "beginner"
  //       // },
  //       // {
  //       //   skill: "cpp",
  //       //   rating: 5,
  //       //   description: "intermediate"
  //       // },
  //       // {
  //       //   skill: "Bootstrap",
  //       //   rating: 8,
  //       //   description: "Advance"
  //       // }
  //     ]
  //   };
  //   this.triggerChildUpdate = this.triggerChildUpdate.bind(this);
  // }

  constructor() {
    super();
    this.skillId = 0;
    this.state = {
      username: "",
      skillList: [
        // skill: "",
        // rating: null,
        // description: ""
      ]
    };
  }

  // triggerChildUpdate(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //     [e.target.name]: e.target.value,
  //     [e.target.name]: e.target.value,
  //     [e.target.name]: e.target.value
  //   });
  // }

  //we can write like this for every individual field which can be complex for multiple input field

  // handleName = e => {
  //   this.setState({ username: e.target.value });
  // };

  // handleSkill = e => {
  //   this.setState({ skill: e.target.value });
  // };

  // handleRating = e => {
  //   this.setState({ rating: e.target.value });
  // };

  // handleDescription = e => {
  //   this.setState({ description: e.target.value });
  // };

  //here, we use common or single handle function which handle all the inputs

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    });

    // for password
    // const value = e.target.name === "password"
    // ? e.target.value.toUpperCase().substr(0,10)
    // : e.target.value;
    // this.setState({ [e.target.name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();
    alert("your data is submitted");
    // console.log(e.target.name);
  };

  handleDelete = index => {
    const copySkillArray = Object.assign([], this.state.skillList);
    copySkillArray.splice(index, 1);
    this.setState({
      skillList: copySkillArray
    });
  };

  setSkill = e => {
    this.setState({
      skill: e.target.value,
      rating: e.target.value,
      description: e.target.value
    });
  };

  addSkill = () => {
    this.skillId = this.skillId + 1;
    const copySkillArray = Object.assign([], this.state.skillList);
    copySkillArray.push({
      id: this.skillId,
      skill: this.state.skill,
      rating: this.state.rating,
      description: this.state.description
    });
    this.setState({
      skillList: copySkillArray
    });
  };

  render() {
    const { username } = this.state;
    return (
      <div id="card">
        <h1 style={{ color: "Green" }}>Candidate Form</h1>
        <h3>Hello, {username}</h3>
        <div id="mypage">
          {/* <input type="text" id="skillid" onBlur={this.setSkill} /> */}
          <form onSubmit={this.handleSubmit}>
            <label>Enter your name:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              onChange={this.handleChange}
              id="username"
              // onChange={this.handleName}
              value={this.state.name}
              autoComplete="off"
            />
            <br />

            <table>
              <thead>
                <tr>
                  {/* <th>Skill</th>
                  <th>Rating</th>
                  <th>Description</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label>Skill:</label>
                    <input
                      type="text"
                      name="skill"
                      placeholder="Enter Your Skills"
                      id="skill"
                      autoComplete="off"
                      // onChange={this.triggerChildUpdate}
                      onBlur={this.setSkill.skill}
                      value={this.state.skill}
                      // onChange={this.handleSkill}
                    />
                  </td>
                  <td>
                    <label>Rating:</label>
                    <select
                      value={this.state.rating}
                      name="rating"
                      id="rating"
                      onBlur={this.setSkill.rating}
                      // onChange={this.triggerChildUpdate}
                    >
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
                  </td>
                  <td>
                    <label>Description:</label>
                    <textarea
                      placeholder="Describe Your Skill"
                      name="description"
                      max-length="200"
                      id="description"
                      value={this.state.description}
                      // onChange={this.triggerChildUpdate}
                      onBlur={this.setSkill.description}
                      // onChange={this.handleDescription}
                    />
                  </td>
                </tr>
                {this.state.skillList.map((skillList, index) => {
                  return (
                    <AddSkill
                      key={skillList.skill}
                      skill={skillList.skill}
                      rating={skillList.rating}
                      description={skillList.description}
                      delete={this.handleDelete.bind(this, index)}
                    />
                  );
                })}
              </tbody>
            </table>

            {/* <div>
              
            </div> */}

            {/* </div> */}
            <button
              type="button"
              id="btn"
              className="button"
              onClick={this.addSkill}
            >
              Add More Skill
            </button>
            <button
              type="submit"
              value="submit"
              className="button"
              style={{ margin: "20px" }}
              // onClick={skills()}
              // onClick={this.props.triggerChildUpdate}
            >
              Save
            </button>
          </form>
        </div>
        <div id="table">
          <MyTable
            username={this.state.name}
            skill={["c", "cpp", "html"]}
            rating={["3", "5", "7"]}
            description="beginner, beginner, intermediate"
          />
          {/* <FormData /> */}
        </div>
      </div>
    );
  }
}

// MyForm.propTypes = {
//   username: React.propTypes.string,
//   skill: React.propTypes.string,
//   rating: React.propTypes.number,
//   description: React.propTypes.string
// };

ReactDOM.render(<MyForm />, document.getElementById("root"));

export default MyForm;
