import Link from "next/link";

export default function CardItem( props:any ) {

    const { image, title, desc, link } = props;
    return (
        <>
            <Link href={link} className="">
                <div className="w-full aspect-square rounded-[15px] truncate mb-[10px]">
                    <img src= {image} className="w-full h-full object-cover"/>
                </div>
                <div className="text-[#FFFFFF] text-[14px] font-[700] mb-[10px] capitalize line-camp-1">
                    {title}
                </div>
                <div className="text-[#FFFFFF80] font-[400] text-[12px] line-clamp-1 mb-[6px]">
                    {desc}
                </div>
            </Link>
        </>
    )
}