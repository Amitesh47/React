import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ListOfCourses from './ListOfCourses';
import ListOfButtons from './ListOfButtons';
import LifeCycleHooks from './LifeCycleHooks'
import PostsComponent from './AjaxComponent';
import FunctionalComponent from './Functional_component';
import Block from './BlockComponent';
import Comment from './CommentComponent';
import {RouterApp} from './RoutingCompo.js'
// var All = <FunctionalComponent>
//                 <Block />
//                 <Comment />
//     </FunctionalComponent>

    ReactDOM.render(<RouterApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
