import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <button 
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-6xl p-2"
          onClick={onClose}
              >
            &times;
          </button>

        <div className="text-center mb-4">
          <img
            src="/perfil.png"
            alt="Avatar"
            className="rounded-full w-24 h-24 mx-auto"
          />
          <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
            Trocar Foto
          </button>
        </div>
        <form>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Curso"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Departamento"
              className="w-full border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Senha Atual"
              className="w-full border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Nova Senha"
              className="w-full border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Confirmar Nova Senha"
              className="w-full border p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-emerald-400 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;