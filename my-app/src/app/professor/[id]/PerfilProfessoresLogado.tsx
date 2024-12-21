import BodyProfessores from "./perfilprofessores/componentsPProfessor/bodyProfessores";
import { getProfessor } from "@/utils/api";
import { useEffect, useState } from "react";
import HeaderLogado from "@/app/components/headerLogado";

export default function PerfilProfessoresDeslogado({ Id }) {
  const [professor, setProfessor] = useState(null); // Estado para armazenar os dados do professor
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erros

  useEffect(() => {
    const fetchProfessor = async () => {
      try {
        const professorData = await getProfessor(Id); // Busca os dados do professor
        setProfessor(professorData);
      } catch (error) {
        console.error("Erro ao buscar professor:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessor();
  }, [Id]);

  if (loading) {
    return <div className="text-center mt-10">Carregando...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Erro: {error}</div>;
  }

  if (!professor) {
    return <div className="text-center mt-10">Nenhum dado encontrado para este professor.</div>;
  }

  const { nome, disciplina, departamento, fotoPerfil, avaliacoes } = professor;

  return (
    <main className="bg-gray-200 min-h-screen">
      <HeaderLogado />
      <BodyProfessores
        FotoPerfilProfessores={fotoPerfil || "/PerfilProfessores.png" || undefined}
        NomeProfessor={nome || "Nome não disponível"}
        DisciplinaProfessor={disciplina.nome}
        departamento={departamento}
        avaliacoes={avaliacoes} // Passe o array de avaliações aqui
      />
    </main>
  );
}
