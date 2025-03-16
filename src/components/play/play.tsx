import { FaBackwardStep, FaForwardStep, FaPlay, FaVolumeHigh } from "react-icons/fa6";
import PlayAudio from "./playAudio";
import PlayInfor from "./PlayInfor";
import PlayAction from "./playAction";
import PlayTime from "./playTime";
import PlayVolume from "./playVolume";

export default function Play () {
    return (
        <>
            <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-[0] py-[20px] z-[999] w-full hidden audio-play">
                <PlayAudio/>
                <div className="container mx-auto">
                    <div className="flex justify-center items-center">
                        <PlayInfor/>
                        <div className="mx-[67px] flex-1">
                            <PlayAction/>
                            <PlayTime/>
                        </div>
                            <PlayVolume/>
                    </div>
                </div>
            </div>
        </>
    )
}