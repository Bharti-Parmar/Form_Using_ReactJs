import React, { Component } from 'react';
// import '../styles.css';

class Table extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: 'Arti',
            skill: 'C',
            rating: '5',
            description: 'Beginner'
            // data: []
        }
    }
    render() {
        return (
            <div className="Table">
                <h1 className="text-center text-dark">Users Skill Data</h1>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <table className="table table-stripped mt-3">
                        {/* <caption>Users Skill Data</caption> */}
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Skill</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Description</th>
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
                                <td>{this.state.username}</td>
                                <td>{this.state.skill}</td>
                                <td>{this.state.rating}</td>
                                <td>{this.state.description}</td>
                            </tr>
                            <tr>
                                <td>{this.props.username}</td>
                                <td>{this.props.skill}</td>
                                {/* <td>{this.props.data}</td> */}
                                <td>{this.props.rating}</td>
                                <td>{this.props.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="col-2"></div>
                </div> 
            </div>
        );
    }
}

export default Table;