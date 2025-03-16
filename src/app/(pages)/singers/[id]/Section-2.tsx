"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import SongItem_2 from "@/components/SongItem/SongItem_2";
import Title from "@/components/title/title";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section_2 ( props: any) {
    const data = [
        {
            image: "/demo/Image-12.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4.32",
            link: "/song/1"
        },
        {
            image: "/demo/Image-12.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4.32",
            link: "/song/1"
        },
        {
            image: "/demo/Image-12.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4.32",
            link: "/song/1"
        },
        {
            image: "/demo/Image-12.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4.32",
            link: "/song/1"
        },
        {
            image: "/demo/Image-12.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4.32",
            link: "/song/1"
        },
        {
            image: "/demo/Image-12.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4.32",
            link: "/song/1"
        },
        {
            image: "/demo/Image-12.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4.32",
            link: "/song/1"
        },
    ]

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
    }, [])

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