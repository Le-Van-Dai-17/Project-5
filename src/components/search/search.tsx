"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function Search () {
    const router = useRouter();
    const params = useSearchParams();

    const keywordDefault = params.get("keyword") || "";

    const HandleSearch = (event:any) => {
        event.preventDefault();

        const keyword = event.target.keyword.value;
        if(keyword){
            router.push(`/search?keyword=${keyword}`);
        }
    }

    return (
        <>
            <form 
                onSubmit={HandleSearch}
                className="bg-[#212121] mt-[20px] sticky top-[0] rounded-[50px] w-[100%] z-[999] flex py-[16px] items-center px-[30px] text-white">
                <button type="submit" className="text-[22px] mr-[20px]">
                    <FaSearch />
                </button>
                <input 
                    type="text" 
                    name="keyword" 
                    className="flex-1 font-[600] text-[16px] bg-transparent outline-none text-white" 
                    placeholder="Tìm kiếm..."
                    defaultValue={keywordDefault}
                />
            </form>
        </>
    )
}