import React from "react";

const TabelaOrdenacao = ({ onClose }) => {
  return (
    <div className="absolute bg-[#133E78] text-white rounded-lg mt-2 p-4 w-48 right-32 top-[18rem]">
      <ul>
        <li
          className="cursor-pointer p-2 hover:bg-gray-800"
          onClick={() => onClose("Nome")}
        >
          Nome
        </li>
        <li
          className="cursor-pointer p-2 hover:bg-gray-800"
          onClick={() => onClose("Matéria")}
        >
          Matéria
        </li>
        <li
          className="cursor-pointer p-2 hover:bg-gray-800"
          onClick={() => onClose("Recentes")}
        >
          Recentes
        </li>
        <li
          className="cursor-pointer p-2 hover:bg-gray-800"
          onClick={() => onClose("Antigas")}
        >
          Antigas
        </li>
      </ul>
    </div>
  );
};

export default TabelaOrdenacao;
