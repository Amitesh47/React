import React from 'react';
import load from './loading.gif';
export default class Progress extends React.Component{
    render(){
        return(
            <div className="col-md-6">
                <img src={load} alt="loading..." />
                </div>
        )
    }
}