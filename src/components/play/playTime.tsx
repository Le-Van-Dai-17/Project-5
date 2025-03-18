"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function PlayTime () {
    const HandleTime = (event:any) => {
        const time = parseFloat(event.target.value);

        const elementPlay: any = document.querySelector(".audio-play .inner-audio");

        elementPlay.currentTime = time;
    }

    return (
        <>
            <div className="inner-play-time">
                <input 
                    className="w-[100%] cursor-pointer bg-[#FFFFFF0A] h-[4px] rounede-[50px] inner-current-time" 
                    type="range" 
                    min={0} 
                    max={0} 
                    defaultValue={0}
                    onClick={HandleTime}
                />
            </div>
        </>
    )
}