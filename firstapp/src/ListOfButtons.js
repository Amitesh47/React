import React from 'react';
import CustomButtons from './CustomButtons';

export default class ListOfButtons extends React.Component{
    constructor(){
        super();
        this.state = {buttonvalues:[10,20,30,40,50]};
    }

    AddNewButton(){
        this.setState({buttonvalues:[...this.state.buttonvalues,+(this.refs.txtInput.value)]})  //+ is used to convert to numeric vlaue
    }

    DeleteAButton(){
        let buttonToBeDeleted = this.refs.txtInput.value;
        var theNewList = this.state.buttonvalues.filter(v => v!= buttonToBeDeleted);
        this.setState({buttonvalues: theNewList});
    }

    render(){
        var valueOfButtons = this.state.buttonvalues.map(c => <CustomButtons value = {c} key={c}/>);
            return (
            <div >
                    Enter Number: <input type="text" ref="txtInput"/>
                    <button className = "btn btn-success" onClick = {this.AddNewButton.bind(this)}>Add
                        <span className = "glyphicon glyphicon-plus"> </span>
                    </button>
                    <button className = "btn btn-danger" onClick = {this.DeleteAButton.bind(this)}>Remove
                        <span className = "glyphicon glyphicon-minus"> </span>
                    </button>

                {valueOfButtons}
                
            </div>
            )
    }
} 