import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiderMenuItem (props:any) {
    const pathName = usePathname();

    const { item, isLogin, index} = props;

    return (
        <>
            {(item.isLogin === isLogin || item.isLogin === undefined) && (
                <li className="text-white mb-[30px]" key={index}>
                    <Link 
                        href={item.link} 
                        className={"flex items-center hover:text-[#00ADEF] capitalize" +   (pathName === item.link ? " text-[#00ADEF]" : " text-white")
                        }
                    >
                        <span className="text-[22px] mr-[20px]">
                            {item.icon}
                        </span>
                        <span className="font-[700] text-[16px]">
                            {item.title}
                        </span> 
                    </Link> 
                </li>
            )}
        </>
    )
}