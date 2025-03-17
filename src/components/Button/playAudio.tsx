import { FaPlay } from "react-icons/fa6";

export default function PlayAudio ( props: any) {
    const { image, title, singer, id, audio } = props;

    const HandleAudio = () => {
        const elementPlayAudio = document.querySelector(".audio-play");
        if(elementPlayAudio){

            elementPlayAudio.setAttribute("song-id", id);

            const elementPlay:any = elementPlayAudio.querySelector(".inner-audio");
            const elementSource:any = elementPlayAudio.querySelector(".inner-source");
            
            elementSource.src=audio;

            elementPlay.load();
            elementPlay.play();

            if(elementPlayAudio.classList.contains("hidden")){
                elementPlayAudio.classList.remove("hidden");
            }

            const sectionPlay = document.querySelector(".section-play");

            if(sectionPlay){
                const elementImage: any = sectionPlay.querySelector(".inner-image");
                elementImage.src = image;
                const elementTitle: any = sectionPlay.querySelector(".inner-title");
                elementTitle.innerHTML = title;
                const elementSingers: any = sectionPlay.querySelector(".inner-singer");
                elementSingers.innerHTML = singer;
            }

            const elementButtonPlay: any = elementPlayAudio.querySelector(".inner-button-play");
            elementButtonPlay.classList.add("play");

            const elementPlayTotalTime:any = elementPlayAudio.querySelector(".inner-current-time");

            elementPlay.onloadedmetadata = () => {
                const totalTime = elementPlay.duration;
                elementPlayTotalTime.max = totalTime;

                elementPlay.ontimeupdate = () => {
                    const currentTime = elementPlay.currentTime;

                    elementPlayTotalTime.value = currentTime;
                }
            }
        }
    }

    return (
        <>
            <button onClick={HandleAudio}
                className="w-[34px] h-[34px] rounded-[50%] bg-[#00ADEF] text-[16px] text-[#FFFFFF] inline-flex items-center justify-center mr-[10px] inner-button-play">
                <FaPlay />
            </button>
        </>
    )
}