import Link from "next/link";
import PlayAudio from "../Button/playAudio";
import ButtonHeart from "../Button/buttonHeart";
import Image from "next/image";

export default function SongItem_2 ( props:any) {
    const { image, title, singer, time, link, id} = props;
    return (
        <>
            <div className="flex items-center px-[18px] bg-[#212121] rounded-[15px] py-[10px] justify-between">
                <div className="flex items-center">
                    <div className="mr-[12px] text-[21px] text-[#00ADEF]">
                        <PlayAudio {...props} />
                    </div>
                    <div className="mr-[12px] w-[42px] aspect-square truncate rounded-[15px]">
                        <Image src={image} alt={title} className="w-full h-full object-cover" />
                   </div>
                   <Link href={link} className="text-[#FFFFFF] text-[14px] font-[700]">
                        {title}
                    </Link>
                </div>
                <div className="text-[#FFFFFF] text-[14px] font-[400]">
                    {singer}
                </div>
                <div className="flex">
                    <div className="text-[#FFFFFF] text-[14px] font-[400] mr-[18px]">
                        {time}
                    </div>
                    <ButtonHeart {...props}/>
                </div>
            </div>
        </>
    )
}