export function products(defStore=[],action){
    switch(action.type){
        case 'REMOVE_PRODUCT':
            console.log(action.theId);
            var theNewList = defStore.filter(v => v.id !== action.theId);
            return theNewList;

        case 'INCREMENT_LIKES':
            var theNewList = [
                    ...defStore.slice(0,action.theIndex),
                    {...defStore[action.theIndex],likes:defStore[action.theIndex].likes + 1},
                    ...defStore.slice(action.theIndex+1)
            ];
            return theNewList;

        case 'DECREMENT_LIKES':
            var theNewList = [
                    ...defStore.slice(0,action.theIndex),
                    {...defStore[action.theIndex],likes:defStore[action.theIndex].likes - 1},
                    ...defStore.slice(action.theIndex+1)
            ];
            return theNewList;

        case 'ADD_NEW_PRODUCT':
            
            var theNewList = [...defStore,action.newproduct];
            console.log(theNewList);
            return theNewList

        case 'FETCH_PRODUCTS':
            return action.response;

        default: return defStore;
    }
}