import React, { FC, useState } from "react";
import { createAvaliacao } from "@/utils/api"; // Importa a função de criação de avaliação

interface ModalAvaliacaoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAvaliacao: FC<ModalAvaliacaoProps> = ({ isOpen, onClose }) => {
  const [professorName, setProfessorName] = useState("");
  const [disciplinaName, setDisciplinaName] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const avaliacao = {
        authorId: 1, // Substituir pelo ID real do autor
        professorName,
        disciplinaName,
        conteudo,
      };

      await createAvaliacao(avaliacao); 
      alert("Avaliação enviada com sucesso!");
      onClose();
    } catch (err: any) {
      setError(err.message || "Erro ao enviar avaliação.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-emerald-200 rounded-lg p-6 w-[600px] h-[500px]">
        <h2 className="text-2xl font-bold mb-4">Nova Avaliação</h2>
        <div>
          <input
            type="text"
            placeholder="Nome do Professor"
            className="w-full mb-4 p-2 border rounded-lg"
            value={professorName}
            onChange={(e) => setProfessorName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nome da Disciplina"
            className="w-full mb-4 p-2 border rounded-lg"
            value={disciplinaName}
            onChange={(e) => setDisciplinaName(e.target.value)}
          />
          <textarea
            placeholder="Escreva sua avaliação..."
            className="w-full p-2 border rounded-lg h-60 resize-none"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Avaliar"}
          </button>
        </div>
      </div>
    </div>
  );
};


export default ModalAvaliacao;
