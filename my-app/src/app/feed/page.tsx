"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className="bg-customGreen flex h-[4rem] items-center justify-between">
        <Image
          src="/LogoUnB.png"
          alt="Logo da Universidade de Brasília"
          width={75}
          height={75}
          className="m-4 hover:scale-110"
        ></Image>
        <a href="/login">
          <button className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 m-2 border-2 border-white h-8 w-auto flex items-center justify-center">
            Login
          </button>
        </a>


        {/*Section de novos professores */}
        <section></section>


      </header>
    </main>
  );
}
