import React from 'react';
import Block from './BlockComponent';
import Comment from './CommentComponent';

export default class FunctionalComponent extends React.Component {
    render() {
        return <React.Fragment>
           {this.props.children}
        </React.Fragment>
    }
}