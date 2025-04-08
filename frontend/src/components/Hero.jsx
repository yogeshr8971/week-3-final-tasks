import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
    return(
        <div className = 'flex flex-col sm:flex-row border '>
            
            <img className='w-full h-[230px] sm:w-1/2' src={assets.image} alt=""/>
            <img className='w-full h-[230px] sm:w-1/2' src={assets.banner} alt=""/>
        </div>

    )
}

export default Hero;
