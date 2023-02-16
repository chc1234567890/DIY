import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {str: '', result: window.cs142models.statesModel().map((state) => <div key={state}>{state}</div>)};
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
  }

  handleStr(evt){
    this.setState({str: evt.target.value});
    let s = evt.target.value.toLowerCase();
    let result = [];
    for(let i of window.cs142models.statesModel()){
      if(i.toLowerCase().indexOf(s) != -1){
        result.push(i);
      }
    }
    this.setState({result: result.map((state) => <div key={state}>{state}</div>)});
  }

  render() {
    return (
      <div className="states">
        <input id="input1" onChange={evt => this.handleStr(evt)}></input>
        <p>substring: {this.state.str}</p>
        <br></br>
        <div className="result">{this.state.result ? this.state.result : "Error: No State Found"}</div>
      </div>
    );
  }
}

export default States;
