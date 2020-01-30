import React from 'react';
import ReactDOM from "react-dom";
import KnowledgeForm from "./KnowledgeForm";
import CVActions from "./CVActions";
import CVStore from "./CVStore";
import CandidateForm from "./CandidateForm";
import './App.css';


class EducationForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSchoolnChange=this.handleSchoolnChange.bind(this);
        this.handleEducationChange=this.handleEducationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._onChange = this._onChange.bind(this);
        this.state = {scn:'',edu:''};
    }

    _onChange() {
        let ed = CVStore._education;
        this.setState({
            scn: ed.valueOf().scn,
            edu: ed.valueOf().edu
        });
    }

    componentDidMount() {
        CVStore.addChangeListener(this._onChange);
        this._onChange();
    }

    componentWillUnmount() {
        CVStore.removeChangeListener(this._onChange);
    }


    handleSchoolnChange(event){
        this.setState({email: event.target.value});
    }
    handleEducationChange(event){
        this.setState({edu:event.target.value});
    }
    handleSubmit(event){
        CVActions.addEducation({
            scn:this.state.scn,
            edu:this.state.edu

        });
        this.setState({scn:'',edu:''});
        next(event);
    }


    render() {
        return (
            <div className={"row"}>
                <form>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor={"SchoolInputNames"}>School name:</label>
                    <div className="col-sm-10">
                        <input
                            value={this.state.scn}
                            type='text'
                            onChange={this.handleInputChange}
                            placeholder="Eszterhazy Karoly Univercity"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor={"EducationInputdesc"}>Education:</label>
                    <div className="col-sm-10">
                        <input
                            value={this.state.edu}
                            type='text'
                            onChange={this.handleInputChange}
                            placeholder="Software Engineering"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className={"col-sm-offset-2 col-sm-10"}>
                    <div className="col p-2">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Next</button>
                        <button className="btn btn-secondary" onClick={back}>Back</button>
                        <button className="btn btn-primary" onClick={this.saveEdits}>Save</button>

                    </div>
                </div>
                </form>
            </div>
        );
    }
}

function back(e) {
    e.preventDefault();
    ReactDOM.render(<CandidateForm/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<KnowledgeForm/>, document.getElementById("root"));
}

export default EducationForm;