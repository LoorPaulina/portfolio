import React from "react";

export function Card({imagen, texto, subtitulo}){



    return(
        <div className="bg-slidebar text-white h-72 w-64 p-2">
            <div className="flex flex-col p-2">
                <img className="pb-2" src={imagen}></img>
                <p className="text-sm pb-2">{texto}</p>
                <p className="text-xs">{subtitulo}</p>
            </div>
        </div>
    )
}