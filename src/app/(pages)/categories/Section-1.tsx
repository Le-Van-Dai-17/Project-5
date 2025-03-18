"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import CardItem from "@/components/CardItem/cardItem";
import Title from "@/components/title/title";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Section_1(){
    const [dataFinal, setDataFinal] = useState<any>([]);
    
        useEffect(() => {
            const categoriesRef = ref(dbFirebase, "categories");
            onValue(categoriesRef, (snapshot) => {
                const data = snapshot.val();
                if(data){
                    const categoriesArray = Object.keys(data).map((key) => ({
                        id: key,
                        image: data[key].image,
                        title: data[key].title,
                        desc: data[key].description,
                        link: `/categories/${key}`
                    }))
    
                    setDataFinal(categoriesArray);
                }
            })
        }, [])

    return (
        <>
            <Title text="Danh Mục Bài Hát" />
            <div className="grid grid-cols-5 gap-[20px]">
                {dataFinal.map((item:any, index:number) => (
                    <CardItem key={index} {...item} />
                ))}
            </div>
        </>
    )
}