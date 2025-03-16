import Link from "next/link";
import PlayAudio from "../Button/playAudio";
import ButtonHeart from "../Button/buttonHeart";

export default function SongItem(props: any){
    const { id, image, title, singer, listen, link, wishlist } = props;

    return (
        <>
            <div className="flex items-center bg-[#212121] p-[10px] w-full rounded-[15px]" data-id={id} >
              <div className="w-[76px] aspect-ratio mr-[10px]">
                <img src = {image} className=""/>
              </div>
              <div className="items-center flex-1">
                <Link  href={link} className="font-[600] text-[16px] text-[#FFFFFF] mb-[5px] capitalize">{title}</Link>
                <div className="font-[400] text-[12px] text-[#FFFFFF80] mb-[8px]">{singer}</div>
                <div className="font-[400] text-[12px] text-[#FFFFFF]">{listen.toLocaleString("vi-VN")} lượt nghe</div>
              </div>
              <div className="flex items-center">
                <PlayAudio {...props} />
                <ButtonHeart {...props}/>
              </div>
            </div>
        </>
    )
}