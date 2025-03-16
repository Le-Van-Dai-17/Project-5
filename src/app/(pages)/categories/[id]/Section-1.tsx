"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import CardInfor from "@/components/cardInfor/cardInfor";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section_1 ( props : any) {
    const { id } = props;

    const [dataFinal, setDataFinal] = useState<any>();

    useEffect(() => {
        const SongsRef = ref(dbFirebase, "categories/" + id);
        onValue(SongsRef, (snapshot) => {
            const data = snapshot.val();
            if(data){
                setDataFinal({
                    image: data.image,
                    title: data.title,
                    desc: data.description
                })
            }
        })
    }, [])     

    return (
        <>
            {dataFinal && (
                <CardInfor 
                    image={dataFinal.image}
                    title={dataFinal.title}
                    desc={dataFinal.desc}
                />
            )}
        </>
    )
}