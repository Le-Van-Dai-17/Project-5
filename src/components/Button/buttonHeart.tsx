"use client"

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

export default function ButtonHeart (props:any) {   
    const {id, wishlist} = props;

    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
            onAuthStateChanged(authFirebase, (user) => {
                if (user) {
                    const userId = user.uid
                    if(wishlist && wishlist[userId]){
                        setIsActive(true);
                    }
                }
            })
    }, [])


    const HandleWishlist = () => {
        const user:any = authFirebase.currentUser?.uid;

        const songRef = ref(dbFirebase, `/songs/${id}`);

        runTransaction(songRef, (song) => {
          if (song) {
            if (song.wishlist && song.wishlist[user]) {
              song.wishlist[user] = null;
              setIsActive(false);
            } else {
              if (!song.wishlist) {
                song.wishlist = {};
              }
              song.wishlist[user] = true;
              setIsActive(true);
            }
          }
          return song;
        });
    }

    return (
        <>
            <button 
                className={"w-[34px] h-[34px] border rounded-[50%] text-[16px] text-[#FFFFFF] inline-flex items-center justify-center " + (isActive ? "border-[#00ADEF] bg-[#00ADEF]" : "border-[white]") }
                onClick={HandleWishlist}
            >
                <FaRegHeart/>
            </button>
        </>
    )
}