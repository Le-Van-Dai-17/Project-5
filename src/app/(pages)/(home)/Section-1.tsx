"use client"

import { useEffect, useState } from "react";
import SongItem from "@/components/SongItem/SongItem";
import Title from "@/components/title/title";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import Image from "next/image";

export default function Section_1 () {
    const [dataFinal, setDataFinal] = useState<any>([]);

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
                link: `/song/${key}`,
                audio: data[key].audio,
                wishlist: data[key].wishlist
            }));
            songsArray = songsArray.slice(0, 3);
            setDataFinal(songsArray);
          }
        })
      }, [])

    return (
        <>
            <div className="w-[540px] mr-[20px]">
                <div className="w-full items-center rounded-[15px] bg-cover flex h-[361px]" style={{backgroundImage: "url('./demo/Background-1.png')"}}>
                    <div className="flex-1 ml-[30px] mr-[33px] items-center">
                        <div className="font-[700] text-[32px] text-white mb-[6px]">
                            Nhạc EDM
                        </div>
                        <div className="font-[500] text-[14px] text-white">
                            Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
                        </div>
                    </div>
                    <div className="w-[215px] h-[321px] mr-[23px] mt-[41px]">
                        <Image
                            src="/demo/Image-2.png"
                            alt="Nhạc EDM"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <Title text="Nghe nhiều" />
                <div className="grid grid-cols-1 gap-[12px]" song-list="">
                    {dataFinal.map((item:any) => (
                        <SongItem key={item.id}
                            id= {item.id}
                            image={item.image}
                            title={item.title}
                            singer="Hồ Quang Hiếu, Huỳnh Văn"
                            listen={item.listen}
                            link={item.link}
                            audio={item.audio}
                            wishlist={item.wishlist}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}