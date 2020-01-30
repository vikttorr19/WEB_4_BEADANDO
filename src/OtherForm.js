import React from "react";
import ReactDOM from "react-dom";
import KnowledgeForm from "./KnowledgeForm";
import SummaryPage from "./SummaryPage";
import CVActions from "./CVActions";
import CVStore from "./CVStore";

class OtherForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleOtherInformationChange=this.handleOtherInformationChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this._onChange = this._onChange.bind(this);
        this.state = {ot:''};
    }

    _onChange() {
        let ot = CVStore._other;
        this.setState({
            ot: ot.valueOf().ot
        });
    }

    componentDidMount() {
        CVStore.addChangeListener(this._onChange);
        this._onChange();
    }

    componentWillUnmount() {
        CVStore.removeChangeListener(this._onChange)
    }


    handleOtherInformationChange(event){
        this.setState({ot: event.target.value})
    }
    handleSubmit(event){
        CVActions.addOther({
            ot:this.state.ot
        });
        this.setState({ot:''});
        next(event);
    }

    render() {
        return (
            <div className="form-group">
                <label className="control-label col-sm-2">Other information:</label>
                <div className="col-sm-10">
                    <input
                        value={this.state.ot}
                        type='text'
                        onChange={this.handleOtherInformationChange}
                        placeholder="Skills"
                        className="form-control"
                    />
                </div>
                <div className="form-group ">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-primary" id="bt" onClick={back}>Back</button>
                        <button className="btn btn-primary" id="bt" onClick={this.handleSubmit}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

function back(e) {
    e.preventDefault();
    ReactDOM.render(<KnowledgeForm/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<SummaryPage/>, document.getElementById("root"));
}


export default OtherForm;