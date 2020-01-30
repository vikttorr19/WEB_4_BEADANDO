import React from "react";
import ReactDOM from "react-dom";
import SummaryPage from "./SummaryPage";
import CVStore from "./CVStore";

class ShowJson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _candidate: [],
            _education: [],
            _knowledge: [],
            _other: []
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({
            _candidate:CVStore._candidate,
            _education:CVStore._education,
            _knowledge:CVStore._knowledge,
            _other:CVStore._other
        });
    }

    componentDidMount() {
        CVStore.addChangeListener(this._onChange);
        this._onChange();
    }

    componentWillUnmount() {
        CVStore.removeChangeListener(this._onChange);
    }

    printJsonData() {
        let obj = {
            candidate: this.state._candidate.map(candidate =>{
                return(
                    {
                        Name: [candidate.fn][candidate.ln],
                        Email: [candidate.email]
                    }
                )
                }
            ),

            Schools: this.state._education.map(education => {
                    return (
                        {
                            [education.scn]: {
                                Education: education.edu
                            }
                        }
                    )
                }
            ),
            Knowledge: this.state._knowledge.map(knowledge => {
                    return (
                            [knowledge.kno]
                    )
                }
            ),
            OtherInformation: this.state._other.map(other =>{
                return(
                    [other.ot]
                )
            })
        };

        let json = JSON.stringify(obj, null, 2);
        return json;
    }

    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"form-group"}>
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-primary" onClick={back}>Back</button>
                    </div>
                </div>
                <pre className={"row"}>
                    {this.printJsonData()}
                </pre>
            </div>
        )
    }
}

function back(e) {
    e.preventDefault();
    ReactDOM.render(<SummaryPage/>, document.getElementById("root"));
}

export default ShowJson;