// @ts-ignore
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from "moment";
import 'moment/locale/es';
import 'moment-timezone';
import {useContext} from "react";
import {actions, context} from "../../context/store";
import React from 'react';


export const MyCalendar = () => {
    const [state, dispatch] = useContext(context) as any;
    const testing: string = state.get("testing");
    moment.tz.setDefault('America/Lima')
    const localizer = momentLocalizer(moment);
    const myEventsList = [{
        title: "Hello",
        allDay: false,
        start: new Date(2022, 10, 20, 12, 0, 0),
        end: new Date(2022, 10, 20, 13, 0, 0),
    }];


    return (
        <div>
            {/*<button onClick={() => dispatch(actions.ADD(++testing))}>*/}
            {/*    +*/}
            {/*</button>*/}
            <Calendar
                culture="es"
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                // messages={{agenda:"hola"}}
                style={{height: 500, margin: "50px"}}
            />
        </div>
    )
}