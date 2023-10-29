export const reducer = (state:any, action:any)  => {
    if (!action.type) {
        if (action.key instanceof Array) {
            return state.setIn(action.key, action.payload);
        }
        return state.set(action.key, action.payload);
    }
    if (action.type === "clean") { // todas las key deben ir dentro de un []
        return state.mergeDeepIn(action.key, action.payload);
    }
    return state;
}
