// pages/FeedDeslogado.js
"use client";

import { useEffect, useState } from "react";
import HeaderDeslogado from "../components/headerDeslogado";
import OrdernarDeslogado from "../components/ordernarDeslogado";
import ListaDeProfessores from "../components/listaDeProfessores";
import { getUser } from "@/utils/api"; // Importando o método da API

export default function FeedDeslogado() {
  const [novosProfessores, setNovosProfessores] = useState([]);
  const [todosProfessores, setTodosProfessores] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Carregar dados dos professores ao montar o componente
    const fetchProfessores = async () => {
      try {
        const professores = await getUser(); // Supondo que essa rota retorna os professores
        setNovosProfessores(professores.slice(0, 4)); // Exemplo: primeiros 4 como "novos"
        setTodosProfessores(professores); // Todos os professores
      } catch (error) {
        console.error("Erro ao buscar professores:", error.message);
      }
    };

    fetchProfessores();
  }, []);

  // Filtrar professores pelo nome
  const professoresFiltrados = searchQuery
    ? todosProfessores.filter((professor) =>
        professor.nome.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : todosProfessores;

  return (
    <main className="bg-gray-200 h-screen">
      <HeaderDeslogado />

      {/* Div de novos professores */}
      <div className="flex flex-row items-center border: top-3 mt-3 justify-between">
        <h2 className="text-3xl ml-32 mt-20 font-semibold">Novos professores</h2>
        <div>
          <input
            type="text"
            placeholder="Buscar professor(a)"
            className="rounded-md px-2 m-2 h-10 w-96 mr-32 bg-no-repeat bg-[url('/search.png')] pl-10 bg-contain"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Exibir novos professores */}
      <ListaDeProfessores professores={novosProfessores} />

      <hr
        className="border-t-2 border-black my-4 mx-auto w-11/12"
        style={{ width: "calc(100% - 12rem)" }}
      />

      {/* Div de todos os professores */}
      <OrdernarDeslogado />

      {/* Exibir todos os professores */}
      <ListaDeProfessores professores={professoresFiltrados} />

      <hr
        className="border-t-2 border-black my-4 mx-auto w-11/12"
        style={{ width: "calc(100% - 12rem)" }}
      />
    </main>
  );
}
