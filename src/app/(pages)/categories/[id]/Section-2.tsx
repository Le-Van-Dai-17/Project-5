"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import SongItem_2 from "@/components/SongItem/SongItem_2";
import Title from "@/components/title/title";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section_2 ( props:any ) {

    const { id } = props;

    const [dataFinal, setDataFinal] = useState<any>();
    
    useEffect(() => {
        const songsRef = ref(dbFirebase, "songs");
        onValue(songsRef, (snapshot) => {
            const data = snapshot.val();
            if(data){
                let songsArray = Object.keys(data).map(key => ({
                    id: key,
                    image: data[key].image,
                    title: data[key].title,
                    singer: "",
                    listen: data[key].listen,
                    singerId: data[key].singerId,
                    categoryId: data[key].categoryId,
                    link: "/song/" + key,
                    audio: data[key].audio,
                    wishlist: data[key].wishlist
                }));
                
                songsArray = songsArray.filter(item => item.categoryId === id);

                setDataFinal(songsArray);
            }
        })
        }, [])


    return (
        <>
            <Title text="Danh Sách Bài Hát" />
            <div className="grid grid-cols-1 gap-[10px]">
                {dataFinal && (
                    <>
                        {dataFinal.map((item:any) => (
                            <SongItem_2 key={item.id} {...item} />
                        ))}
                    </>
                )}
            </div>
        </>
    )
}