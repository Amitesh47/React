import React from 'react';
export default function Block() {
    return <div className="row">
        <div className="col-md-2">
            <input type="text" placeholder="Enter your text here" />
            <input type="button" className="btn btn-danger" value="Submit" />
        </div>
    </div>
}