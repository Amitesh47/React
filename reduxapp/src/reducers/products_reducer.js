export function products(defStore=[],action){
    switch(action.type){
        case 'ADD_NEW_PRODUCT':
            console.log('Within Products Reducer..'+action.type);
            return defStore;

        case 'REMOVE_PRODUCT':
            console.log(action.theId);
            var theNewList = defStore.filter(v => v.id !== action.theId);
            return theNewList;

        default: return defStore;
    }
}