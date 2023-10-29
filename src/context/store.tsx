import {fromJS} from "immutable";
import React, {useContext, useReducer} from "react";
import {doctor} from "./actions/doctor";
import {general} from "./actions/general";
import {login} from "./actions/login";
import {testing} from "./actions/testing";
import {reducer} from "./reducer/reducer";
import {doctorStore} from "./states/doctor";
import {generalStore} from "./states/general";
import {loginStore} from "./states/login";
import {userStore} from "./states/user";

/*
    state.get('value') < returns a simple value
    state.getIn(['value']).toJS() < return an object and requires an array
    state.getIn(['value','otherValue']).toJS() < if you want to go deeper in a nested object
*/
export const context = React.createContext({...loginStore, ...userStore, ...generalStore, ...doctorStore});

export const actions = Object.freeze({...general, ...login, ...testing, ...doctor});

export const ApplicationContext = ({children}: { children: any }) => {
    const [state, dispatch] = useReducer(reducer, fromJS(useContext(context)));

    return (
        // @ts-ignore
        <context.Provider value={[state, dispatch]}>
            {children}
        </context.Provider>
    )
}
