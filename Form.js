import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import Table from './Table';

class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            skill: '',
            rating: null,
            description: ''
            // data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.clearInputData = this.clearInputData.bind(this);
    }

    handleChange = e => {
        this.setState({
            // username: e.target.value,
            // skill: e.target.value
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        });
    };

    // handleSubmit = e => {
    //     e.preventDefault();
// not working why?
        // if(e.target.name === e.target.value){
            // alert('Data submitted');
        // }
        // else{
        //     alert('No data available');
        // }  
    // }

    handleSubmit(e){
        e.preventDefault();
        alert('data is processing');
        this.setState({
            username: this.state.username,
            skill: this.state.skill,
            rating: this.state.rating,
            description: this.state.description
        })
        alert('data submitted');
    }


    // to clear the input value

    // clearInputData(){
    //     this.setState({
    //         // username: '',
    //         // skill: '',
    //         // rating: '',
    //         // description: ''
    //     });
    //     ReactDOM.findDOMNode(this.refs.myInput).focus();
    // }


    // for multiple array skill data

    // setStateHandler() {
    //     var item = "setState..."
    //     var myArray = this.state.data.slice();
    //     myArray.push(item);
    //     this.setState({data: myArray})
    //  };

    AddMoreSkill(){
        alert('add skill');
        // document.getElementById('skill').innerHTML('<h1 className="text-center"> new item </h1>');
    }

    render() {

        // function SubmitData(){
        //     console.log('Data Submit');
        // }

        return (
            <div className="container">
                <div className="card mt-5 p-5 bg-warning">
                    <h1 className="text-center">User Skills Form</h1>
                    <h3 className="text-danger">Welcome, {this.state.username}</h3>
                    <form className="mx-5 mt-3" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <label className="d-flex justify-content-start">Enter your name:</label>
                                <input
                                type="text"
                                name="username"
                                id="username"
                                value={this.state.username}
                                className="w-100"
                                // ref = "myInput"
                                placeholder="Enter Your Name"
                                autoComplete="off"
                                onChange={this.handleChange}
                                validate
                                />
                            </div>
                        </div>

                        <div className="row mt-3" id="skill">
                            <div className="col-4">
                                <label>Enter Your Skill:</label>
                                <input
                                    type="text"
                                    name="skill"
                                    // ref = "myInput"
                                    value={this.state.skill}
                                    onChange={this.handleChange}
                                    placeholder="Enter Your Skills"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-4">
                                <label>Rating:</label>
                                <select
                                    onChange={this.handleChange}
                                    value={this.state.rating}
                                    name="rating"
                                    // ref = "myInput"
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
                            </div>
                            <div className="col-4">
                                <label>Description:</label>
                                <textarea
                                    placeholder="Describe Your Skill"
                                    onChange={this.handleChange}
                                    value={this.state.description}
                                    // ref = "myInput"
                                    name="description"
                                    max-length="200"
                                />
                            </div>
                        </div>

                        {/* <div className="row" id="skill"></div> */}

                        <button
                        type="button"
                        id="btn"
                        className="btn btn-primary"
                        onClick={this.AddMoreSkill}
                        >
                        Add More Skill
                        </button>

                        <button
                        type="submit"
                        // value="submit"
                        className="btn btn-success"
                        onClick={this.clearInputData}
                        // onClick={this.setStateHandler}
                        style={{ margin: "20px" }}
                        >
                        Save
                        </button>
                    </form>
                </div>

                <Table username={this.state.username} skill={this.state.skill} rating={this.state.rating} description={this.state.description} />

            </div>
        );
    }
}

export default Form;