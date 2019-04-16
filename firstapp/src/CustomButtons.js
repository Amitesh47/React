import React from 'react';
import './CourseComponent.css';

export default class CustomButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.value,
        }
    }

    IncrementCount() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div className = "container">
                <button className="btn btn-danger" onClick={this.IncrementCount.bind(this)}>{this.state.count}</button>
            </div>
        )
    }
}