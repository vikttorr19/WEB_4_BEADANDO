import React from 'react';
import ReactDOM from "react-dom";
import 'react-toastify/dist/ReactToastify.css';
import CVActions from "./CVActions";
import CVStore from "./CVStore";
import './App.css';
import EducationForm from "./EducationForm";

class CandidateForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange=this.handleLastNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {fn :'',ln:'',email:''}
    }
    handleFirstNameChange(event){
        this.setState({fn : event.target.value});
    }
    handleLastNameChange(event){
        this.setState({ln:event.target.value});
    }
    handleEmailChange(event){
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        CVActions.addCandidate({
            fn :this.state.fn,
            ln:this.state.ln,
            email:this.state.email
        });
        this.setState({fn :'',ln:'',email:''});
        next(event);
    }

    render() {
        return (
            <div className={"row"}>
                <form className={"col"} onSubmit={this.handleSubmit} name={"contacts"}>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor={"FirstNameInputField"}>Firstname: </label>
                                <div className="col-sm-10">
                                    <input
                                        id={"FirstNameInputField"}
                                        value={this.state.fn}
                                        type='text'
                                        onChange={this.handleFirstNameChange}
                                        placeholder="Kiss"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor={"LastNameInputField"}>LastName: </label>
                                <div className="col-sm-10">
                                    <input
                                        id={"LastNameInputField"}
                                        value={this.state.ln}
                                        type='text'
                                        onChange={this.handleLastNameChange}
                                        placeholder="Dénes"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor={"emailInputField"}>Email: </label>
                                <div className="col-sm-10">
                                    <input
                                        id={"emailInputField"}
                                        value={this.state.email}
                                        type={"email"}
                                        onChange={this.handleEmailChange}
                                        placeholder="cvgenerator@cv.com"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button className="btn btn-primary" id="bt" onClick={this.handleSubmit}>Next
                                    </button>
                                </div>
                            </div>
                </form>
        </div>
        )
    }
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<EducationForm/>, document.getElementById("root"));
}

export default CandidateForm;
