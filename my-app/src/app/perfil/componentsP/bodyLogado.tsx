"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Curso from "./curso";
import Email from "./email";
import BotaoVoltar from "./botaoVoltar";
import Comentario from "./comentario";
import ModalEditarPerfil from "./modalPerfil"; 

const BodyLogado = () => {
  const [userData, setUserData] = useState({
    NomeUsuario: '',
    Curso: '',
    Departamento: '',
    Email: '',
    FotoPerfil: '',
  });

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUserData({
      NomeUsuario: user.nome || 'Nome Desconhecido',
      Curso: user.curso || 'Curso Desconhecido',
      Departamento: user.departamento || 'Departamento Desconhecido',
      Email: user.email || 'email@dominio.com',
      FotoPerfil: user.foto || '', 
    });
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="relative top-[0px] left-[1/2] w-[646px] h-screen border-t-[0px] border-r-[1px] border-b-[0px] border-l-[1px] border-black opacity-100 bg-[#FFF]">
        <div className="absolute top-[0px] left-[0px] w-[644px] h-[151px] opacity-100 bg-[#3EEE9A]">
          <div>
            {userData.FotoPerfil && userData.FotoPerfil !== 'null' && userData.FotoPerfil !== '' && (
              <Image
                src={userData.FotoPerfil} 
                alt="Foto de perfil"
                width={140}
                height={140}
                className="rounded-[70px] relative top-[75px] left-[60px]"
              />
            )}
            {!userData.FotoPerfil || userData.FotoPerfil === 'null' || userData.FotoPerfil === '' ? (
              <div className="rounded-[70px] relative top-[75px] left-[60px] bg-gray-300 w-[140px] h-[140px]">
              </div>
            ) : null}

            <h2 className="relative top-[70px] left-[75px] font-bold text-lg mt-4">
              {userData.NomeUsuario}
            </h2>
            <p className="relative top-[70px] left-[74px]">
              {userData.Curso} / {userData.Departamento}
            </p>
            <Email Email={userData.Email} />
          </div>
          <div className="flex item-center justify-center w-[646px] h-[1px] opacity-100 bg-[#000] absolute top-[350px]"></div>
          <BotaoVoltar />
          
          {/* Editar Perfil Button */}
          <button
            onClick={handleOpenModal}
            className="absolute top-[160px] left-[450px] px-[15px] py-[5px] bg-customGreen text-black font-inter rounded-lg border-[1px] border-black shadow-md hover:bg-[#3EEE9A] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75"
          >
            Editar Perfil
          </button>

          <button className="absolute top-[200px] left-[450px] px-[13px] py-[4px] bg-[#FEA4A4] text-black font-inter rounded-lg border-[1px] border-black shadow-md hover:bg-[#f00] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75">
            Excluir Perfil
          </button>

          <div className="absolute top-[350px] left-[10px]">
            <h2 className="font-bold text-black">Publicações</h2>
          </div>

          <div className="absolute top-[380px]">
            <Comentario 
              FotoPerfil={userData.FotoPerfil}
              NomeUsuario={userData.NomeUsuario}
              CreatedAt="17/04/2024, às 21:42"
              NomeProfessor="João Frango"
              DisciplinaProfessor="Surf"
              ConteudoComentario="Contrary to popular belief, Lorem Ipsum is not simply random text."
              NumeroComentarios="2"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <ModalEditarPerfil onClose={handleCloseModal} />}
    </div>
  );
};

export default BodyLogado;
