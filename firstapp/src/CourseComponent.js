import React from 'react';
import './CourseComponent.css';

export default class CourseComponent extends React.Component {
    render() {
        return (
            <div className = "col-md-4 CourseStyle">
                <h1> {this.props.coursedetails.name} </h1>
                <h5> Duration: {this.props.coursedetails.duration} </h5>
            </div>
        );
    }
}
