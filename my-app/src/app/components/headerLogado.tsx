import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeaderLogado = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

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

        <div className="flex flex-row gap-4 mx-2">
          <Image
            src="/notificacao.png"
            alt="Notificações"
            width={30}
            height={30}
            className="hover:scale-110"
          ></Image>

          <Link href={"/perfil"}>
            <Image
              src="/perfil.png"
              alt="Foto de perfil"
              width={30}
              height={30}
              className="rounded-full hover:scale-110"
            ></Image>
          </Link>

          {/* Sair (Logout) Button */}
          <button onClick={handleLogout} className="hover:scale-110">
            <Image
              src="/sair.png"
              alt="Sair"
              width={30}
              height={30}
            ></Image>
          </button>
        </div>
      </header>
    </>
  );
};

export default HeaderLogado;


