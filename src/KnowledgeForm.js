import React from 'react';
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import OtherForm from "./OtherForm";
import CVActions from "./CVActions";
import CVStore from "./CVStore";

class KnowledgeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleKnowledgeChange=this.handleKnowledgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._onChange = this._onChange.bind(this);
        this.state = {kno:''};
    }

    _onChange() {
        let kno = CVStore._knowledge;
        this.setState({
            kno: kno.valueOf().kno
        });
    }
    componentDidMount() {
        CVStore.addChangeListener(this._onChange);
        this._onChange();
    }

    componentWillUnmount() {
        CVStore.removeChangeListener(this._onChange);
    }
    handleKnowledgeChange(event){
        this.setState({kno:event.target.value});
    }

    handleSubmit(event){
        CVActions.addKnowledge({
            kno:this.state.kno
        });
        this.setState({kno:''});
        next(event);
    }
    render() {
        return (

            <div className="form-group">
                <label className="control-label col-sm-2">Knowledge:</label>
                <div className="col-sm-10">
                    <input
                        value={this.state.kno}
                        type='text'
                        onChange={this.handleKnowledgeChange}
                        placeholder="Max 500 characters"
                        className="form-control"
                    />
                </div>
                <div className="form-group ">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-secondary" id="bt" onClick={back}>Back</button>
                        <button className="btn btn-primary" id="bt" onClick={this.handleSubmit}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}


function back(e) {
    e.preventDefault();
    ReactDOM.render(<EducationForm/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<OtherForm/>, document.getElementById("root"));
}

export default KnowledgeForm;