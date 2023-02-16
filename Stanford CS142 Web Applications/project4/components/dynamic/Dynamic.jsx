import React from 'react';
import Example from '../example/Example';
import States from '../states/States';

class Dynamic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {is_state : true};
    }

    handleClick(evt) {
        this.setState({is_state: !this.state.is_state});
    }

    render() {
        return (
            <div>
                <button id="Button" onClick={evt => this.handleClick(evt)}>
                    {"Switch to " + (this.state.is_state ? "Example" : "State")}
                </button>
                {this.state.is_state ? <States /> : <Example />}
            </div>
        );
    }
}

export default Dynamic;
