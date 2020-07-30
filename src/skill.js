import React from "react";

const AddSkill = props => {
  return (
    <tr>
      <td>
        <label>Skill:</label>
        <input
          type="text"
          name="skill"
          placeholder="Enter Your Skills"
          autoComplete="off"
          onChange={this.handleChange}
          value={this.state.skill}
          // onChange={this.handleSkill}
        />
      </td>
      <td>
        <label>Rating:</label>
        <select
          value={this.state.rating}
          name="rating"
          onChange={this.handleChange}
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
          value={this.state.description}
          onChange={this.handleChange}
          // onChange={this.handleDescription}
        />
      </td>
    </tr>
  );
};
export default AddSkill;
