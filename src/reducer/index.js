const initialState={
    isAll:false,
    refs:{},
    activeClassItem:[]
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case "ISALL":return{...state,isAll:action.target};
        case "REFS":return{...state,refs:action.target}
        case "ACTIVE":return{...state,activeClassItem:action.target}
        default:
            return state;
    }
}