import Image from "next/image";

export default function CardInfor( props:any ){
    const { image, title, desc } = props;
    return (
        <>
            <div className="flex mb-[30px] items-center">
                <div className="w-[180px] aspect-square rounded-[15px] mr-[20px] truncate">
                    <Image src={image} alt={title} className="w-full h-full object-cover"/>
                </div>
                <div className="flex-1 ">
                    <h1 className="text-[#00ADEF] font-[700] text-[35px] capitalize mb-[10px]">
                        {title}
                    </h1>
                    <div className="text-[14px] text-[#EFEEE0] font-[400]">
                        {desc}
                    </div>
                </div>
            </div>
        </>
    )
}