import React, { FC } from 'react';

interface ModalAvaliacaoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAvaliacao: FC<ModalAvaliacaoProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-emerald-200 rounded-lg p-6 w-[600px] h-[500px]">
        <h2 className="text-2xl font-bold mb-4">Nova Publicação</h2>
        <div>
          <input
            type="text"
            placeholder="Nome do professor"
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Disciplina"
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <textarea
            placeholder="Escreva sua avaliação..."
            className="w-full p-2 border rounded-lg h-60 resize-none"
          />
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Cancelar
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Avaliar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAvaliacao;
