import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {ShoppingCart} from './shoppingcart';
import NewProduct from './new_product';

export default class RootApp extends React.Component {
    componentDidMount(){
        this.props.FetchProducts();
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => <ShoppingCart {...this.props} />} />
                    <Route path='/newproduct' render={() => <NewProduct {...this.props} />} />
                </Switch>
            </div>
        )
    }
}