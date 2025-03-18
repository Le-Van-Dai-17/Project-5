"use client"

import { FaBackwardStep, FaForwardStep, FaPause, FaPlay } from "react-icons/fa6";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function PlayAction () {
    const HandlePause = () => {
        const elementPlayAudio:any = document.querySelector(".audio-play");

        if(elementPlayAudio){
            const elementButtonPlay: any = elementPlayAudio.querySelector(".inner-button-play");
            const elementPlay:any = elementPlayAudio.querySelector(".inner-audio");
            if(elementButtonPlay.classList.contains("play")){
                elementButtonPlay.classList.remove("play");
                elementPlay.pause();
            } else{
                elementButtonPlay.classList.add("play");
                elementPlay.play();
            }
        }
    }

    const HandleNext = () => {
        const elementPlayAudio:any = document.querySelector(".audio-play");
        const idSong = elementPlayAudio.getAttribute("song-id");
        if(idSong){
            const songList: any = document.querySelector("[song-list]");
            const elementSongCurrent = songList.querySelector(`[data-id="${idSong}"]`);
            if(elementSongCurrent.nextSibling){
                const elementNext = elementSongCurrent.nextSibling;
                const buttonPlay = elementNext.querySelector(".inner-button-play");
                buttonPlay.click();
            }
            
        }
    }

    const HandlePrev = (event: any) => {
        const elementPlayAudio:any = document.querySelector(".audio-play");
        const idSong = elementPlayAudio.getAttribute("song-id");
        if(idSong){
            const songList: any = document.querySelector("[song-list]");
            const elementSongCurrent = songList.querySelector(`[data-id="${idSong}"]`);
            if(elementSongCurrent.previousSibling){
                const elementPrev = elementSongCurrent.previousSibling;
                const buttonPlay = elementPrev.querySelector(".inner-button-play");
                buttonPlay.click();
            }   
        }
    }

    return (
        <>
            <div className="flex justify-center text-white items-center">
                <button 
                    className="w-[10px] h-auto mr-[42px]"
                    onClick={HandlePrev}
                >
                    <FaBackwardStep/>
                </button>
                <button
                    onClick={HandlePause}
                    className="w-[32px] text-[16px] h-[32px] bg-[#00ADEF] rounded-[50%] mr-[42px] inline-flex items-center justify-center inner-button-play">
                        <FaPlay className="inner-icon-play"/>
                        <FaPause className="inner-icon-pause"/>
                </button>
                <button 
                    className="w-[10px] h-auto" 
                    onClick={HandleNext}
                >
                    <FaForwardStep />
                </button>
            </div>
        </>
    )
}