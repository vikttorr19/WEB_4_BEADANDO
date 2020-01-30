import React from 'react';
import ReactDOM from 'react-dom';
import CandidateForm from './CandidateForm';
import * as serviceWorker from './serviceWorker';
import Navbar from "./Navbar";

window.$candidate=[];
window.$education=[];
window.$knowledge=[];
window.$other=[];

ReactDOM.render(<Navbar/>, document.getElementById("nav"));
ReactDOM.render(<CandidateForm/>, document.getElementById("root"));

serviceWorker.unregister();
