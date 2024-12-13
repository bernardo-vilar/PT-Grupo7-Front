import React, { FC, useState, useEffect } from "react";
import { createAvaliacao, getDisciplinas, getProfessores } from "@/utils/api"; // Importa as funções de criação de avaliação, buscar disciplinas e buscar professores

interface ModalAvaliacaoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAvaliacao: FC<ModalAvaliacaoProps> = ({ isOpen, onClose }) => {
  const [professorID, setProfessorID] = useState<number | null>(null);
  const [disciplinaID, setDisciplinaID] = useState<number | null>(null);
  const [conteudo, setConteudo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [professores, setProfessores] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const professores = await getProfessores();
        setProfessores(professores);
      } catch (err) {
        console.error("Erro ao buscar professores", err);
      }
    };

    const fetchDisciplinas = async () => {
      try {
        const disciplinas = await getDisciplinas();
        setDisciplinas(disciplinas);
      } catch (err) {
        console.error("Erro ao buscar disciplinas", err);
      }
    };

    fetchProfessores();
    fetchDisciplinas();
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // A avaliação é criada com o ID do professor e disciplina automaticamente
      const avaliacao = {
        authorId: 1, // Substituir pelo ID real do autor (provavelmente vem de um estado ou contexto)
        professorID: professorID, // Professor ID
        disciplinaID: disciplinaID, // Disciplina ID
        conteudo, // Conteúdo da avaliação
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
          <select
            className="w-full mb-4 p-2 border rounded-lg"
            value={professorID || ""}
            onChange={(e) => setProfessorID(Number(e.target.value))}
          >
            <option value="" disabled>Selecione um Professor</option>
            {professores.map((professor) => (
              <option key={professor.id} value={professor.id}>
                {professor.nome}
              </option>
            ))}
          </select>

          <select
            className="w-full mb-4 p-2 border rounded-lg"
            value={disciplinaID || ""}
            onChange={(e) => setDisciplinaID(Number(e.target.value))}
          >
            <option value="" disabled>Selecione uma Disciplina</option>
            {disciplinas.map((disciplina) => (
              <option key={disciplina.id} value={disciplina.id}>
                {disciplina.nome}
              </option>
            ))}
          </select>

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
