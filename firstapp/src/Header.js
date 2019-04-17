import React from 'react';

export default class Header extends React.Component{
    componentWillMount(){
        console.log('within child componentWillMount..');
    }

    componentDidMount(){
        console.log('within child componentDidMount..');
    }

    shouldComponentUpdate(){
        console.log('within child shouldComponentupdate..');
        return true;
    }

    componentWillUpdate(){
        console.log('within child componentwillUpdate..');
    }

    componentDidUpdate(){
        console.log('within child componentDidUpdate..');
    }

   componentWillReceiveProps(){
    console.log('Within child componentWillReaceiveProps...');
   }
    render(){
        return (
            <h1>{this.props.trans}</h1>
        )
    }
}