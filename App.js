import React from "react";
// import "./styles.css";
// // import { SkillProvider } from "./context";
// import Text from "./text.js";
import Form from './components/Form';
// import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Form />
            {/* <Table name="Mayank" skill="CPP" rating="3" description="Beginner" /> */}
        </div>
    );
}
    // return <SkillProvider />;
  
}

// ReactDOM.render(<App />,document.getElementById('root'));6