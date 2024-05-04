import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export function About(){
    return(
        <div className="w-screen pl-6 pt-56">
            <h1 className="text-white text-4xl pb-4">Paulina Loor Tubay</h1>
            <h2 className="text-white text-3xl pb-7">Computing Engineering Student</h2>
            <button id="cv" className="text-white"  style={{border: '1px solid white', borderRadius: '25px', padding: '10px', marginBottom: '1rem'}}>Download CV</button>
            <div className="flex pt-28 pl-96 gap-4" style={{marginLeft:  '45%'}}>
                <a href="https://www.linkedin.com/in/paulina-loor-tubay-79711a214/" target="_blank">
                    <button id="linkendin" className="bg-slidebar border-bg-slidebar" style={{borderRadius: '100%', color: 'white',  padding: '20px', marginBottom: '1rem', fontFamily: 'FontAwesome'}}>
                    <FaLinkedinIn size={'25px'}></FaLinkedinIn>
                </button> 
                </a>
                <a href="mailto:loorpaulinamar@gmail.com">
                <button id="email" className="bg-slidebar border-bg-slidebar" style={{borderRadius: '30px', color: 'white',  padding: '20px', marginBottom: '1rem'}}><MdEmail size={'25px'}></MdEmail>
                </button></a>
                <a href="tel:+593989163972">
                <button id="wss" className="bg-slidebar border-bg-slidebar" style={{borderRadius: '30px', color: 'white',  padding: '20px', marginBottom: '1rem'}}><IoLogoWhatsapp size={'25px'}></IoLogoWhatsapp></button>
                </a>
            </div>
        </div>
    )}