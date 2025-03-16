"use client"

import { authFirebase } from "@/app/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function logout () {
    const router = useRouter();
    
    useEffect(() => {
        signOut(authFirebase).then(() => {
            router.push("/login");
            alert("Đăng xuất thành công!");
          }).catch((error) => {
            alert("Đăng xuất không thành công!");
          });
    }, [])

    return (
        <>

        </>
    )
}