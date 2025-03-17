"use client"

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import Title from "@/components/title/title";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();
  
  

  const HandleRegister = (event:any) => {
    event.preventDefault();

    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(authFirebase, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      set(ref(dbFirebase, "users/" + user.uid), {
        fullName: fullName
      })
      .then(() => {
        router.push("/");
      })
    })
  }

  return (
    <>
      <div className="w-[500px] mt-[60px] mx-auto">
        <Title text="Đăng Nhập Tài Khoản" className="text-center"/>
        <form 
          className=""
          onSubmit={(event) => HandleRegister(event)}
        >
        <div className="mb-[15px]">
            <label 
              className="block mb-[5px]"
              htmlFor="fullName"
            >
              <span className="text-[#FFFFFF] text-[14px] font-[600]">Họ tên </span>
              <span className="text-[#F21D2F] text-[14px] font-[600]">*</span>
            </label>
            <input 
              className="bg-[#FFFFFF] rounded-[6px] text-[14px] font-[600] py-[14px] px-[16px] w-full outline-none" 
              type="text" 
              placeholder="Ví dụ: Lê Văn A"
              name="fullName"
              required={true}
            />
          </div>
          <div className="mb-[15px]">
            <label 
              className="block mb-[5px]"
              htmlFor="email"
            >
              <span className="text-[#FFFFFF] text-[14px] font-[600]">Email </span>
              <span className="text-[#F21D2F] text-[14px] font-[600]">*</span>
            </label>
            <input 
              className="bg-[#FFFFFF] rounded-[6px] text-[14px] font-[600] py-[14px] px-[16px] w-full outline-none" 
              type="email" 
              placeholder="Ví dụ: levana@gmail.com"
              name="email"
              required={true}
            />
          </div>
          <div className="mb-[15px]">
            <label 
              className="block mb-[5px]"
              htmlFor="email"
            >
              <span className="text-[#FFFFFF] text-[14px] font-[600]">Mật khẩu </span>
              <span className="text-[#F21D2F] text-[14px] font-[600]">*</span>
            </label>
            <input 
              className="bg-[#FFFFFF] rounded-[6px] text-[14px] font-[600] py-[14px] px-[16px] w-full outline-none" 
              type="password" 
              name="password"
              required={true}
            />
          </div>
          <button 
            className="bg-[#00ADEF] text-[16px] font-[700] rounded-[6px] text-[#FFFFFF] w-full h-[50px] text-center items-center"
            type="submit"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </>
  );
}
