import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as allactions from './actions/actionCreators';
import {ShoppingCart} from './components/shoppingcart';
import RootApp from './components/rootapp';

function mapStateToProps(store){
    return {
        allUsers: store.users,
        allProducts: store.products 
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators(allactions,dispatcher);
}

export var Main = connect(mapStateToProps,mapDispatchToProps)(RootApp);