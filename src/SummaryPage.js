import React from "react";
import ReactDOM from "react-dom";
import OtherForm from "./OtherForm";
import ShowJson from "./ShowJson";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';
import CVStore from "./CVStore";
import './App.css';

class SummaryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            candidate: [{fn:'',ln:'',email:''}],
            education: [{edu:''}],
            knowledge: [{kno:''}],
            other: [{ot:''}]};
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({
            candidate: CVStore._candidate,
            education: CVStore._education,
            knowledge: CVStore._knowledge,
            other: CVStore._other
        });
    }

    componentDidMount() {
        CVStore.addChangeListener(this._onChange);

    }

    componentWillUnmount() {
        CVStore.removeChangeListener(this._onChange)
    }


    render() {
        return (
            <div className="container">
            <div className="form-group ">
                <div className="col-sm-offset-2 col-sm-10">
                    <button className="btn btn-secondary" id="bt" onClick={back}>Back</button>
                    <button className="btn btn-primary" id="bt" onClick={next}>Json</button>
                    <button className="btn btn-primary" id="bt" onClick={PDF}>PDF</button>
                </div>
                <div id={'capture'}>
                    {this.state.candidate.map((candidate) => {
                        return (
                            <div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">Name: </label>
                                    <div className="col-sm-10">
                                        <input
                                            value={candidate.fn + " " + candidate.ln}
                                            type='text'
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">Email: </label>
                                    <div className="col-sm-10">
                                        <input
                                            value={candidate.email}
                                            type='text'
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {this.state.education.map((education) => {
                        return (
                            <div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">School name:</label>
                                    <div className="col-sm-10">
                                        <input
                                            value={education.scn}
                                            type='text'
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">Education:</label>
                                    <div className="col-sm-10">
                                        <input
                                            value={education.edu}
                                            type='text'
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {this.state.knowledge.map((knowledge) => {
                        return (
                            <div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">Knowledge:</label>
                                    <div className="col-sm-10">
                                        <input
                                            value={knowledge.kno}
                                            type='text'
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {this.state.other.map((other) => {
                        return (
                            <div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">Other information:</label>
                                    <div className="col-sm-10">
                                        <input
                                            value={other.ot}
                                            type='text'
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        )
    }
}
function PDF() {
    const input = document.getElementById('capture');
    html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("CV.pdf");
        })
    ;
}

function back(e) {
    e.preventDefault();
    ReactDOM.render(<OtherForm/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<ShowJson/>, document.getElementById("root"));
}



export default SummaryPage;
