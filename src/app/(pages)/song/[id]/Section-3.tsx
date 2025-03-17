"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import SongItem_2 from "@/components/SongItem/SongItem_2";
import Title from "@/components/title/title";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section_3 ( props : any) {
    const { id } = props;

    const [dataFinal, setDataFinal] = useState<any>([]);
    
    useEffect(() => {
        const songRef = ref(dbFirebase, "songs/" + id);
        onValue(songRef, (snapshot) => {
            const data = snapshot.val();

            if(data){
                const categoryId = data.categoryId;

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
                            link: `/song/${key}`,
                            categoryId: data[key].categoryId
                        }));
                        songsArray = songsArray.filter(item => item.categoryId === categoryId && id !== item. id);
                        setDataFinal(songsArray);
                        }
                })
            }
        })
        }, [])

    return (
        <>
            <Title text="Bài Hát Cùng Danh Mục" />
            <div className="grid grid-cols-1 gap-[10px]">
                {dataFinal.map((item:any, index:number) => (
                    <SongItem_2 key={index} {...item} />
                ))}
            </div>
        </>
    )
}