"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import CardItem from "@/components/CardItem/cardItem";
import Title from "@/components/title/title";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section_1(){

    const [dataFinal, setDataFinal] = useState<any>();

    useEffect(() => {
        const singersRef = ref(dbFirebase, "singers");
        onValue(singersRef, (snapshot) => {
            const data = snapshot.val();
            if(data){
                const singers = Object.keys(data).map(key => ({
                    id: key,
                    image: data[key].image,
                    title: data[key].title,
                    desc: data[key].description,
                    link: "/singers/" + key
                }))

                setDataFinal(singers);
            }
        })
    }, [])

    return (
        <>
            <Title text="Danh Sách Ca Sĩ" />
            <div className="grid grid-cols-5 gap-[20px]">
                {dataFinal && (
                    <>
                        {dataFinal.map((item: any) => (
                            <CardItem key={item.id} {...item} />
                        ))}
                    </>
                )}
            </div>
        </>
    )
}