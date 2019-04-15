import React from 'react';
import CourseComponent from './CourseComponent';

export default class ListOfCourses extends React.Component {
    constructor() {
        super();
        this.courses = [
            { name: "React", duration: "3days" },
            { name: "Angular", duration: "2days" },
            { name: "Node", duration: "5days" },
        ];
    }
    render() {
        var coursesToBeCreated = this.courses.map(c => <CourseComponent coursedetails = {c}/>);
        return (
            <div className = "container">
                <div className = "row">
                {coursesToBeCreated}
                </div>
            </div>
        );
    }
}
