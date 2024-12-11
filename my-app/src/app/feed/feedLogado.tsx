"use client";

import React, { useEffect, useState } from "react";
import HeaderLogado from "../components/headerLogado";
import ProfessorCard from "../components/professorCard";
import OrdernarLogado from "../components/ordenarLogado";
import ModalAvaliacao from "../components/modalAvaliacao";
import { getProfessores } from "@/utils/api"; // Importando o método correto da API

const FeedLogado = () => {
  const [novosProfessores, setNovosProfessores] = useState([]);
  const [todosProfessores, setTodosProfessores] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carregar dados dos professores ao montar o componente
  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const professores = await getProfessores(); // Chama a função getProfessores
        setNovosProfessores(professores.slice(0, 4)); // Exemplo: primeiros 4 como "novos"
        setTodosProfessores(professores); // Todos os professores
      } catch (error) {
        console.error("Erro ao buscar professores:", error.message);
      }
    };

    fetchProfessores();
  }, []);

  // Filtrar professores pelo nome ou disciplina
  const professoresFiltrados = searchQuery
    ? todosProfessores.filter(
        (professor) =>
          professor.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
          professor.disciplina?.nome.toLowerCase().includes(searchQuery.toLowerCase()) // Acessando o nome da disciplina
      )
    : todosProfessores;

  return (
    <main className="bg-gray-200 min-h-screen">
      <HeaderLogado />
      
      {/* Div de novos professores */}
      <div className="flex flex-row items-center justify-between mt-10 px-6">
        <h2 className="text-3xl font-semibold ml-[5.5rem]">Novos professores</h2>
        <div className="mr-[5.5rem]">
          <input
            type="text"
            placeholder="Buscar professor(a)"
            className="w-full mr-[5.5rem] rounded-md px-3 py-2 h-10 bg-no-repeat bg-[url('/search.png')] pl-10 bg-contain"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Card dos novos professores */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-10 max-w-7xl mx-auto">
        {novosProfessores.map((professor, index) => (
          <ProfessorCard
            key={index}
            nome={professor.nome}
            disciplina={professor.disciplina}  // Passando a disciplina diretamente
            foto={professor.foto || "/lamar.jpg"} // Garantir foto padrão
          />
        ))}
      </section>

      <hr className="border-t-2 border-black my-4 mx-auto w-11/12" style={{ width: "calc(100% - 12rem)" }} />

      {/* Div de todos os professores */}
      <OrdernarLogado />

      {/* Card dos todos os professores */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-10 max-w-7xl mx-auto">
        {professoresFiltrados.map((professor, index) => (
          <ProfessorCard
            key={index}
            nome={professor.nome}
            disciplina={professor.disciplina}  // Passando a disciplina diretamente
            foto={professor.foto || "/lamar.jpg"} // Garantir foto padrão
          />
        ))}
      </section>

      <hr className="border-t-2 border-black my-4 mx-auto w-11/12" style={{ width: "calc(100% - 12rem)" }} />
        
      {/* Modal */}
      <ModalAvaliacao isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default FeedLogado;
