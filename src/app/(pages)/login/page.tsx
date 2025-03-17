"use client"

import { authFirebase } from "@/app/firebaseConfig";
import Title from "@/components/title/title";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const HandleLogin = (event:any) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(authFirebase, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if(user){
        router.push("/");
      }
    })
    .catch(() => {
      alert("Email hoặc mật khẩu không đúng!")
    });
  }

  return (
    <>
      <div className="w-[500px] mt-[60px] mx-auto">
        <Title text="Đăng Nhập Tài Khoản" className="text-center"/>
        <form 
          className=""
          onSubmit={HandleLogin}
        >
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
            Đăng nhập 
          </button>
        </form>
      </div>
    </>
  );
}
