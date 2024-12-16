"use client";

import BodyProfessores from "./perfilprofessores/componentsPProfessor/bodyProfessores";
import { getProfessor } from "@/utils/api";
import { useEffect, useState } from "react";
import HeaderLogado from "@/app/components/headerLogado";

export default function PerfilProfessoresDeslogado({Id}) {
 
  const [professor, setProfessor] = useState(null); // Estado para armazenar os dados do professor
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erros

  useEffect(() => {
    // Função para buscar os dados do professor
    const fetchProfessor = async () => {
      try {
        const professorData = await getProfessor(Id); // Chama a função getProfessor passando o ID
        setProfessor(professorData); // Atualiza o estado com os dados do professor
      } catch (error) {
        console.error("Erro ao buscar professor:", error.message);
        setError(error.message); // Atualiza o estado com o erro
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchProfessor();
  }, [Id]); // Adiciona Id como dependência para atualizações

  // Renderiza enquanto os dados estão carregando
  if (loading) {
    return <div className="text-center mt-10">Carregando...</div>;
  }

  // Renderiza caso ocorra um erro
  if (error) {
    return <div className="text-center mt-10 text-red-500">Erro: {error}</div>;
  }

  // Verifica se os dados do professor foram carregados
  if (!professor) {
    return <div className="text-center mt-10">Nenhum dado encontrado para este professor.</div>;
  }

  // Desestruturação para obter partes específicas do professor
  const { nome, disciplina, departamento, fotoPerfil } = professor;

  return (
    <main className="bg-gray-200 min-h-screen">
      <HeaderLogado />
      <BodyProfessores 
        FotoPerfilProfessores={fotoPerfil || "/PerfilProfessores.png"} // Imagem padrão
        NomeProfessor={nome || "Nome não disponível"} // Nome padrão
        DisciplinaProfessor={disciplina.nome}
        departamento={departamento}
      />
    </main>
  );
}
