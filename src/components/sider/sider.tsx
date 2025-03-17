import Link from "next/link";
import SiderMenu from "./siderMenu/siderMenu";
import Image from "next/image";

export default function Sider () {
    return (
        <>
            <div className="h-[100vh] w-[280px] fixed bg-[#212121]">            
                <div className="bg-[#1C1C1C] h-[92px] items-center py-[25px] pl-[20px]">
                    <Link href="/" className="">
                        <Image 
                            src="/Logo.svg"
                            alt="Logo"
                            className="h-[42px] w-auto"
                        />
                    </Link>
                </div>
                <SiderMenu/>
            </div>
        </>
    )
}