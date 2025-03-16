import Link from "next/link";

export default function NotFound404() {
    return (
        <>
            <div className="mt-[200px] text-center">
                <h1 className="text-white font-[700] text-[32px] mb-[10px]">Not Found 404</h1>
                <p className="font-[400] text-[15px] text-[#ffff] mb-[25px]">Could not find requested resouce</p>
                <Link href="/" className="text-[15px] font-[400] text-white bg-[#00ADEF] py-[15px] px-[90px] rounded-[5px] ">Return Home</Link>
            </div>
        </>
    )
}