import React from "react";
import { Slidebar } from "./Slidebar";
import { Outlet } from "react-router-dom";
import { About } from "../views/About";


export function Base (){
    return(
        <div className="bg-base-back h-full flex">
            <Slidebar/>
            <Outlet/>
        </div>
    )
}