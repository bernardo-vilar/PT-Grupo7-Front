import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For navigation

const HeaderLogado = ({ FotoPerfil }) => {
  const router = useRouter();

  const playNotificationSound = () => {
    const audio = new Audio("/sounds/bellding-254774.mp3"); 
    audio.play();
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    router.push("/");
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
        />

        <div className="flex flex-row gap-4 mx-2">
        <button onClick={playNotificationSound} className="hover:scale-110">
            <Image
              src="/notificacao.png"
              alt="Notificações"
              width={30}
              height={30}
            ></Image>
          </button>

          <Image
            src={FotoPerfil}
            alt="Foto de perfil"
            width={30}
            height={30}
            className="rounded-full hover:scale-110"
          />

          <button onClick={handleLogout} className="hover:scale-110">
            <Image
              src="/sair.png"
              alt="Sair"
              width={30}
              height={30}
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default HeaderLogado;
