export function users(defStore=[],action){
    switch(action.type){
        case 'ADD_NEW_USER':
            console.log('Within Users Reducer..'+action.type);
            return defStore;
        default: return defStore;
    }
}