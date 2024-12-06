import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const HeaderDeslogado = () => {
  return (
    <>
    <header className="bg-customGreen flex h-[4rem] items-center justify-between">
        <Image
          src="/LogoUnB.png"
          alt="Logo da Universidade de Brasília"
          width={75}
          height={75}
          className="m-4 hover:scale-110"
        ></Image>
        <Link href={"/login"}> 
          <button className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 mr-4 border-2 border-white h-10 w-auto flex items-center justify-center">
            Login
          </button>
        </Link>
      </header>
    </>
  )
}

export default HeaderDeslogado;