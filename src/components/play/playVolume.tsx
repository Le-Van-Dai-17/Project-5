"use client"

import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolume () {
    const HandleVolume = (event:any) => {
        const volume = parseFloat(event.target.value);
        const elementPlay:any = document.querySelector(".audio-play .inner-audio");

        if(elementPlay){
            elementPlay.volume = volume / 100;
        }
    }

    return (
        <>
            <div className="flex w-[184px] items-center inner-volume">
                <button className="w-[20px] h-auto text-white mr-[6px]">
                    <FaVolumeHigh/>
                </button>
                <input 
                    className="w-[158px] h-[3px]" 
                    type="range" 
                    min={0} 
                    max={100} 
                    defaultValue={80}  
                    onClick={HandleVolume}
                />
            </div>
        </>
    )
}