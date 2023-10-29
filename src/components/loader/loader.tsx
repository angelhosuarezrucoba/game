import React from "react";
import "./loader.css"

export const Loader = ({isLoading}: { isLoading: boolean }) => {
    return (
        <>
            {isLoading ?
                (<div className="d-flex justify-content-center align-items-center h-100 w-100 lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>) : null
            }
        </>
    )
}