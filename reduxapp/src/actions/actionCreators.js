import axios from 'axios';

export function AddNewProduct(newproduct){
    return {type:'ADD_NEW_PRODUCT',newproduct};
}

export function RemoveProduct(theId){
    return {type:'REMOVE_PRODUCT',theId};
}

export function IncrementLikes(theIndex){
    return {type:'INCREMENT_LIKES',theIndex};
}

export function DecrementLikes(theIndex){
    return {type:'DECREMENT_LIKES',theIndex};
}

export function AddUser(){
    return {type:'ADD_USER'};
}

export function FetchProducts(){
    var thePromise = axios.get('https://api.myjson.com/bins/rwxws');
    return(dispatch) => {
        thePromise.then(
            (response) => {
                console.log(response.data);
                dispatch ({type:'FETCH_PRODUCTS',response:response.data});
            },
            (err) => {}
        )
    }
    
}