import Image from "next/image";

export default function PlayInfor () {
    return (
        <>
            <div className="flex items center w-[218px] section-play">
                <Image alt="" className="h-[49px] w-auto mr-[12px] inner-image" src="#"/>
                <div className="">
                    <div className="text-white font-[700] text-[15px] mb-[2px] inner-title"></div>
                    <div className="text-[#FFFFFF70] font-[700] text-[12px] inner-singer"></div>
                </div>
            </div>
        </>
    )
}