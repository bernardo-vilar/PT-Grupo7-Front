import React, { useState } from "react";
import ModalAvaliacao from "./modalAvaliacao";
import TabelaOrdenacao from "./tabelaOrdenacao";

const OrdernarLogado = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controle do dropdown

  // Funções para abrir/fechar o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Função para alternar o dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Lida com a opção escolhida no dropdown
  const handleOptionSelect = (option: string) => {  // Tipo explícito 'string' para 'option'
    console.log("Opção selecionada:", option);
    setIsDropdownOpen(false); // Fecha o menu após a seleção
  };

  return (
    <div>
      {/* Div de todos os professores */}
      <div className="flex flex-row items-center border: top-3 mt-3 justify-between">
        <h2 className="text-3xl ml-32 mt-20 font-semibold">
          Todos os professores
        </h2>
        <div className="flex gap-0">
          {/* Botão para abrir o modal */}
          <button
            onClick={openModal}
            className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 border-2 border-white h-10 w-auto flex mr-[1rem] relative top-[2.5rem]"
          >
            Nova publicação
          </button>
          {/* Botão para exibir o dropdown */}
          <button
            onClick={toggleDropdown}
            className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 border-2 border-white h-10 w-auto flex mr-[8rem] relative top-[2.5rem]"
          >
            Ordenar
          </button>
        </div>
      </div>

      {/* Componente Modal */}
      <ModalAvaliacao isOpen={isModalOpen} onClose={closeModal} />

      {/* Componente Dropdown */}
      {isDropdownOpen && <TabelaOrdenacao onClose={handleOptionSelect} />}
    </div>
  );
};

export default OrdernarLogado;
