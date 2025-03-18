"use client"

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import SongItem_2 from "@/components/SongItem/SongItem_2";
import Title from "@/components/title/title";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Section_1 () {
    const [dataFinal, setDataFinal] = useState<any>([]);
        
    useEffect(() => {
        onAuthStateChanged(authFirebase, (user) => {
            if (user) {
                const userId = user.uid;

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

                        songsArray = songsArray.filter(item => item.wishlist && item.wishlist[userId]);
                        setDataFinal(songsArray);
                    }
                })
            }
        })
    }, [])

    return (
        <>
            <Title text="Bài Hát Yêu Thích" />
            <div className="grid grid-cols-1 gap-[10px]">
                {dataFinal.map((item: any, index: any) => (
                    <SongItem_2 key={index} {...item} />
                ))}
            </div>
        </>
    )
}