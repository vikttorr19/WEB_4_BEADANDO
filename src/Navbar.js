import React from 'react';
import ReactDOM from "react-dom";
import CandidateForm from "./CandidateForm";
import logo from "./logo.svg";
import './App.css';

class Navbar extends React.Component {
    render() {
        return (
            <div class="container_nav">
                <div class="form-group">
                    <div onClick={home}>
                        <img src={logo} alt={logo} className="App-logo"/>
                        CV Generator
                    </div>
                </div>
            </div>
        )
    }
}

function home(e) {
    e.preventDefault();
    window.$candidate = [];
    window.$education = [];
    window.$knowledge = [];
    window.$other = [];
    ReactDOM.render(<CandidateForm/>, document.getElementById("root"));
}

export default Navbar;