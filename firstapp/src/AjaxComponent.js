import React from 'react';
import axios from 'axios';

export default class PostsComponent extends React.Component{
    constructor(){
        super();
        this.state = {allPosts:[]};
    }
    componentDidMount(){
        let thePromise = axios.get('https://jsonplaceholder.typicode.com/posts');
        thePromise.then(
            (response)=>{this.setState({allPosts: response.data})},
            (err)=>{}
        )
    }

    render(){
        var title = this.state.allPosts.map(c => <li key={c.id}> {c.title}</li>);
        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    {title}
                </ul>
                </div>
        )
    }
}