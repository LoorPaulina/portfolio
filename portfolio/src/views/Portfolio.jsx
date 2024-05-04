import React from "react";
import { Card } from "../components/Card";
import landingpage from '../images/0.png';
import inventary from '../images/1.png';
import attention from '../images/2.png';
import pokemon from '../images/3.png';
import support from '../images/4.png';
import dashboard from '../images/5.png';


export function Portfolio(){
    const projects = 6;
    const elementos = [];
    const images =[landingpage, inventary, attention, pokemon, support, dashboard];
    const titles = ["Landing Page", "Inventory Management System", "Health Care Management System", "MPA Pokemon Page", "Design of an App", "Dashboard"];
    const subtitles = ["Promotional page of a Veterinary Center.", "Inventory Management System for a Pastry Shop.", "Patient appointment scheduling and registration system for a therapy office.", "Demo page of a pokemon dataset.", "UX Design of an app for psychological accompaniment", "Guayaquil Weather Dashboard."]

    for (let i = 0; i < projects; i++) {
        elementos.push(<Card key={i} imagen={images[i]} texto={titles[i]} subtitulo={subtitles[i]}/>);
    }
    

    return (
        <div className="w-screen pl-6 pt-10">
            <h1 className="text-white pb-4 text-4xl">Projects</h1>
            <div className="h-screen grid grid-cols-4 grid-rows-2 gap-2">
                {elementos}
            </div>
        </div>
    )
}

