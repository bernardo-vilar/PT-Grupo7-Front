"use client"

import React, { useState } from "react";
import Image from "next/image";
import Curso from "./curso";
import Email from "./email";
import BotaoVoltar from "./botaoVoltar";
import Comentario from "./comentario";
import ModalEditarPerfil from "./modalPerfil"; 

const BodyLogado = ({FotoPerfil, NomeUsuario}) => {

  const [isModalOpen, setModalOpen] = useState(false); 

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const curso = "Gente Boa"
  const email = "MortyGamer@gmail.com"
  const fotoPerfilComentario = "/perfil.png"
  const nomeUsuarioComentario = "Morty Gamer"
  const createdAt = "29 de fev, as 23:99"
  const nomeProfessor = "Joao Frango"
  const disciplinaProfessor = "Surf"
  const conteudoComentario = "Professor Bacana. Adoro quando falta!Professor Bacana. Adoro quando falta!Professor Bacana. Adoro quando falta!Professor Bacana. Adoro quando falta!"
  const numeroComentarios = "10"

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="relative top-[0px] left-[1/2] w-[646px] h-screen border-t-[0px] border-r-[1px] border-b-[0px] border-l-[1px] border-black opacity-100 bg-[#FFF]">
          <div className="absolute top-[0px] left-[0px] w-[644px] h-[151px] opacity-100 bg-[#3EEE9A]">
            <div>
              <Image
                src={FotoPerfil}
                alt="Foto de perfil"
                width={140}
                height={140}
                className="rounded-[70px] relative top-[75px] left-[60px]"
              />
              <h2 className="relative top-[70px] left-[75px] font-bold text-lg mt-4">
                {NomeUsuario}
              </h2>
              <Curso Curso = {curso}/>
              <Email Email={email}/>
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
            <Comentario FotoPerfil = {fotoPerfilComentario} NomeUsuario ={nomeUsuarioComentario} CreatedAt = {createdAt} NomeProfessor = {nomeProfessor} DisciplinaProfessor = {disciplinaProfessor} ConteudoComentario = {conteudoComentario} NumeroComentarios = {numeroComentarios}/>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ModalEditarPerfil onClose={handleCloseModal} /> 
      )}
    </>
  );
};

export default BodyLogado;