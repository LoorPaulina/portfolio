import React from "react"; 
import { Link } from "react-router-dom";

export function Slidebar(){

    return (
        <div className="bg-slidebar w-52 flex-none">
            <ul className="text-text-slidebar pl-4 py-4 pt-72">
                <li className="py-2"><Link to={'/'}>About me</Link></li>
                <li className="py-2"><Link to={'/Portfolio'} className="py-2">Portfolio</Link></li>
                <li className="py-2"><Link to={'/Skills'} className="py-2">Skills</Link></li>
                <li className="py-2"><Link to={'/Experience'} className="py-2">Contact me</Link></li>
            </ul>
        </div>
    )
}