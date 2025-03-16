"use client"

import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHeart, FaMusic, FaPodcast, FaUser, FaUserPlus } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import SiderMenuItem from "./siderMenuItem";

export default function SiderMenu() {
    const [isLogin, setIsLogin] = useState<boolean>();

    useEffect(() => {
        onAuthStateChanged(authFirebase, (user) => {
            if (user) {
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        })
    }, [])

    const menu = [
        {
            icon: <TiHome/>,
            title: "Trang chủ",
            link: "/"
        },
        {
            icon: <FaMusic />,
            title: "Danh mục bài hát",
            link: "/categories"
        },
        {
            icon: <FaPodcast />,
            title: "Ca sĩ",
            link: "/singers"
        },
        {
            icon: <FaHeart/>,
            title: "Bài hát yêu thích",
            link: "/wishlist",
            isLogin: true
        },
        {
            icon: <FiLogOut />,
            title: "Đăng xuất",
            link: "/logout",
            isLogin: true
        },
        {
            icon: <FaUser />,
            title: "Đăng nhập",
            link: "/login",
            isLogin: false
        },
        {
            icon: <FaUserPlus />,
            title: "Đăng ký",
            link: "/register",
            isLogin: false
        }
    ];

    return (
        <>
            <nav className="py-[30px] px-[20px]">
                <ul className="">
                    {menu.map((item, index) => (
                        <SiderMenuItem item={item} isLogin={isLogin} key={index} />
                    )
                    )}
                </ul>
            </nav>
        </>
    )
}