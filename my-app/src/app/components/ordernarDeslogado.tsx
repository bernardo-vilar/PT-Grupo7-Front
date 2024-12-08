import React, { useState } from "react";
import TabelaOrdenacao from "./tabelaOrdenacao";

const OrdenarDeslogado = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Adicionando o tipo explícito 'string' para o parâmetro 'option'
  const handleOptionSelect = (option: string) => { // Definição explícita do tipo
    console.log("Opção selecionada:", option);
    setShowMenu(false); // Fecha o menu ao selecionar uma opção
  };

  return (
    <div>
      {/* Div de todos os professores */}
      <div className="flex flex-row items-center border: top-3 mt-3 justify-between">
        <h2 className="text-3xl ml-32 mt-20 font-semibold">
          Todos os professores
        </h2>
        <button
          onClick={toggleMenu}
          className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 border-2 border-white h-10 w-auto flex mr-[8rem] relative top-[2.5rem]"
        >
          Ordenar
        </button>
      </div>

      {/* Exibir o menu dropdown */}
      {showMenu && <TabelaOrdenacao onClose={handleOptionSelect} />}
    </div>
  );
};

export default OrdenarDeslogado;
