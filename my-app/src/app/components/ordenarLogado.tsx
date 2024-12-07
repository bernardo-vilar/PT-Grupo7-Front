import React, { useState } from "react";
import ModalAvaliacao from "./modalAvaliacao";

const OrdernarLogado = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Div de todos os professores */}
      <div className="flex flex-row items-center border: top-3 mt-3 justify-between">
        <h2 className="text-3xl ml-32 mt-20 font-semibold">
          Todos os professores
        </h2>
        <div className="flex gap-0">
          {/* Button to open the modal */}
          <button
            onClick={openModal}
            className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 border-2 border-white h-10 w-auto flex mr-[1rem] relative top-[2.5rem]"
          >
            Nova publicação
          </button>
          <button className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 border-2 border-white h-10 w-auto flex mr-[8rem] relative top-[2.5rem]">
            Ordenar
          </button>
        </div>
      </div>

      {/* ModalAvaliacao Component */}
      <ModalAvaliacao isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default OrdernarLogado;
