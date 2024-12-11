import React, { FC, useState } from "react";
import { createAvaliacao, getProfessorByName, getDisciplinaByName } from "@/utils/api";

interface ModalAvaliacaoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAvaliacao: FC<ModalAvaliacaoProps> = ({ isOpen, onClose }) => {
  const [professorNome, setProfessorNome] = useState("");
  const [disciplinaNome, setDisciplinaNome] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // Busca os IDs com base nos nomes
      const professor = await getProfessorByName(professorNome);
      const disciplina = await getDisciplinaByName(disciplinaNome);

      // Validação se os dados foram encontrados
      if (!professor || !disciplina) {
        throw new Error("Professor ou disciplina não encontrados.");
      }

      const avaliacao = {
        authorId: 1, // Substitua conforme necessário
        professorID: professor.id,
        disciplinaID: disciplina.id,
        conteudo,
      };

      await createAvaliacao(avaliacao); // Envia a avaliação
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
          {/* Nome do Professor */}
          <input
            type="text"
            placeholder="Nome do Professor"
            className="w-full mb-4 p-2 border rounded-lg"
            value={professorNome}
            onChange={(e) => setProfessorNome(e.target.value)}
          />

          {/* Nome da Disciplina */}
          <input
            type="text"
            placeholder="Nome da Disciplina"
            className="w-full mb-4 p-2 border rounded-lg"
            value={disciplinaNome}
            onChange={(e) => setDisciplinaNome(e.target.value)}
          />

          {/* Conteúdo da Avaliação */}
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
