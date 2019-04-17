import React from 'react';
import Header from './Header';
export default class LifeCycleHooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { companyName: '' };
    }
    Transfer(event) {
        console.log('within event change..');
        this.setState({ companyName: event.target.value });
    }

    componentWillMount(){
        console.log('within parent componentWillMount..');
    }

    componentDidMount(){
        console.log('within parent componentDidMount..');
    }

    shouldComponentUpdate(){
        console.log('within parent shouldComponentupdate..');
        return true;
    }

    componentWillUpdate(){
        console.log('within parent componentwillUpdate..');
    }

    componentDidUpdate(){
        console.log('within parent componentDidUpdate..');
    }

    render() {
        console.log("within render...");
        return (
            <div>
                <input type="text" onChange={this.Transfer.bind(this)} />
                <Header trans = {this.state.companyName}/>
            </div>
        )
    }
}