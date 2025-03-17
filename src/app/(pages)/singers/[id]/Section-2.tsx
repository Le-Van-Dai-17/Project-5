"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import SongItem_2 from "@/components/SongItem/SongItem_2";
import Title from "@/components/title/title";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section_2 ( props: any) {
    const { id } = props;
    
    const [dataFinal, setDataFinal] = useState<any>();

    useEffect(() => {
        const songsRef = ref(dbFirebase, "songs");
        onValue(songsRef, (snapshot) => {
            const data = snapshot.val();
            if(data){
                let songs = Object.keys(data).map(key => ({
                    id: key,
                    title: data[key].title,
                    image: data[key].image,
                    desc: data[key].decs,
                    categoryId: data[key].categoryId,
                    link: "/song/" + id,
                    singer: data[key].singerId,
                    audio: data[key].audio
                }))

                songs = songs.filter(item => item.singer.includes(id));
                setDataFinal(songs);
            }
        })
    }, [id, dataFinal])

    return (
        <>
            <Title text="Danh Sách Bài Hát" />
            <div className="grid grid-cols-1 gap-[10px]">
                {dataFinal && (
                    <>
                        {dataFinal.map((item: any) => (
                            <SongItem_2 key={item.id} {...item} />
                        ))}
                    </>
                )}
            </div>
        </>
    )
}