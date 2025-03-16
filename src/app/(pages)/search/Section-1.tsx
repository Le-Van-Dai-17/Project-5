"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import SongItem_2 from "@/components/SongItem/SongItem_2";
import Title from "@/components/title/title";
import { onValue, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section_1 () {
    const params = useSearchParams();
    const keyword = params.get("keyword") || "";

    const [dataFinal, setDataFinal] = useState<any>();

    useEffect(() => {
        const songsRef = ref(dbFirebase, "songs");
        onValue(songsRef, (snapshot) => {
            const data = snapshot.val();
            if(data){
                let songs = Object.keys(data).map(key => ({
                    id: key,
                    image: data[key].image,
                    title: data[key].title,
                    singer: "Hồ Quang Hiếu, Huỳnh Văn",
                    time: data[key].time,
                    link: "/song/" + key
                }))
                const regex = new RegExp(keyword, "i");
                songs = songs.filter((item) => regex.test(item.title));
                setDataFinal(songs);
            }
        })
    }, [keyword])

    return (
        <>
            <Title text="Kết Quả Tìm Kiếm" />
            <div className="grid grid-cols-1 gap-[10px]">
                {dataFinal && (
                    <>
                        {dataFinal.map((item:any, index:number) => (
                            <SongItem_2 key={index} {...item} />
                        ))}
                    </>
                )}
            </div>
        </>
    )
}