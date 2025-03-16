"use client"

import { dbFirebase } from "@/app/firebaseConfig";
import CardItem from "@/components/CardItem/cardItem";
import Title from "@/components/title/title";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section_1(){
    const data = [
        {
            image: "/demo/Image-6.png",
            title:"nhạc trẻ",
            desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/categories/1"
        },
        {
            image: "/demo/Image-7.png",
            title:"Pop Âu Mỹ",
            desc: "Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Pop Âu Mỹ",
            link: "/categories/1"

        },
        {
            image: "/demo/Image-8.png",
            title:"Nhạc EDM",
            desc: "Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ",
            link: "/categories/1"

        },
        {
            image: "/demo/Image-9.png",
            title:"Nhạc Trữ Tình",
            desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/categories/1"

        },
        {
            image: "/demo/Image-10.png",
            title:"Nhạc Hàn Quốc",
            desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/categories/1"

        },
        {
            image: "/demo/Image-6.png",
            title:"nhạc trẻ",
            desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/categories/1"

        },
        {
            image: "/demo/Image-7.png",
            title:"Pop Âu Mỹ",
            desc: "Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Pop Âu Mỹ",
            link: "/categories/1"

        },
        {
            image: "/demo/Image-8.png",
            title:"Nhạc EDM",
            desc: "Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ",
            link: "/categories/1"

        },
        {
            image: "/demo/Image-9.png",
            title:"Nhạc Trữ Tình",
            desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/categories/1"

        },
        {
            image: "/demo/Image-10.png",
            title:"Nhạc Hàn Quốc",
            desc: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/categories/1"

        },
    ]

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