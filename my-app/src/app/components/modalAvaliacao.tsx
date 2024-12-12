import React, { FC, useState } from "react";
import { createAvaliacao } from "@/utils/api"; // Importa a função de criação de avaliação

interface ModalAvaliacaoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAvaliacao: FC<ModalAvaliacaoProps> = ({ isOpen, onClose }) => {
  // Estados para os campos do formulário
  const [professorID, setProfessorID] = useState("");
  const [disciplinaID, setDisciplinaID] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  // Função para enviar a avaliação
  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // Convertendo os IDs para números antes de enviar
      const avaliacao = {
        authorId: 1, // Assumindo que o ID do autor é 1 (substitua conforme necessário)
        professorID: Number(professorID),
        disciplinaID: Number(disciplinaID),
        conteudo,
      };

      await createAvaliacao(avaliacao); // Chama a função de criação
      alert("Avaliação enviada com sucesso!");
      onClose(); // Fecha o modal
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
          {/* Campo para Nome do Professor */}
          <input
            type="text"
            placeholder="ID do Professor"
            className="w-full mb-4 p-2 border rounded-lg"
            value={professorID}
            onChange={(e) => setProfessorID(e.target.value)}
          />

          {/* Campo para Disciplina */}
          <input
            type="text"
            placeholder="ID da Disciplina"
            className="w-full mb-4 p-2 border rounded-lg"
            value={disciplinaID}
            onChange={(e) => setDisciplinaID(e.target.value)}
          />

          {/* Campo para Conteúdo */}
          <textarea
            placeholder="Escreva sua avaliação..."
            className="w-full p-2 border rounded-lg h-60 resize-none"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />
        </div>

        {/* Mensagem de Erro */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Botões */}
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
