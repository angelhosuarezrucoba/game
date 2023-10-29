import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {ProtectedRoutes} from "../auth/ProtectedRoutes";
import {UnprotectedRoutes} from "../auth/UnprotectedRoutes";
import {Appointment} from "../views/home/appointment/appointment";
import {Home} from "../views/home/home";
import {Login} from "../views/login/login";
import {NotFound} from "../views/notfound/notFound";
import {PhaserRoot} from "../phaser/phaser";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UnprotectedRoutes/>}>
                    <Route path="/" element={<Navigate replace to="/home"/>}/>
                    <Route path="/home" element={<PhaserRoot/>}/>
                </Route>
                {/*<Route element={<ProtectedRoutes/>}>*/}
                {/*    <Route path="/home" element={<Home/>}>*/}
                {/*        <Route index element={<Appointment/>}/>*/}
                {/*        /!*<Route path="schedule" element={<Schedule/>}/>*!/*/}
                {/*    </Route>*/}
                {/*</Route>*/}
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}