import React, { useState } from 'react';
import { updatePassword } from '@/utils/api';
import { mdiCurrencyEth } from '@mdi/js';

interface ModalEditarPerfilProps {
  onClose: () => void;
}

const ModalEditarPerfil: React.FC<ModalEditarPerfilProps> = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userSenha = user?.senha;

    if (currentPassword !== userSenha){
      setErrorMessage('Senha atual errada!');
      return;
    }
    if (!currentPassword || !newPassword || !confirmPassword) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('A nova senha e a confirmação não coincidem.');
      return;
    }

    try {
      await updatePassword(newPassword);
      const updatedUser = { ...user, senha: newPassword };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setSuccessMessage('Senha atualizada com sucesso.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      setErrorMessage(error.message || 'Erro ao atualizar a senha.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
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
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Senha Atual"
              className="w-full border p-2 rounded"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Nova Senha"
              className="w-full border p-2 rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmar Nova Senha"
              className="w-full border p-2 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="mt-2 text-green-500 text-sm">{successMessage}</p>
          )}
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

export default ModalEditarPerfil;
