"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import Title from "@/components/title/title";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Section_2 ( props : any) {
    const { id } = props
    
    const [dataFinal, setDataFinal] = useState<any>();
    
        useEffect(() => {
            const SongsRef = ref(dbFirebase, "songs/" + id);
            onValue(SongsRef, (snapshot) => {
                const data = snapshot.val();
                if(data){
                    setDataFinal({
                        lyric: data.lyric
                    })
                }
            })
        }, [id, dataFinal])   

    return (
        <>
            <div className="mb-[30px]">
                <Title text="Lời Bài Hát"/>
                <div className="bg-[#212121] p-[20px] text-[#FFFFFF] text-[14px] font-[500] rounded-[15px]">
                    {dataFinal && dataFinal.lyric}
                </div>
            </div>
        </>
    )
}