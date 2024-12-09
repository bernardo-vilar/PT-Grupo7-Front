import React, { useState } from 'react';
import HeaderLogado from '../components/headerLogado';
import ProfessorCard from '../components/professorCard';
import OrdernarLogado from '../components/ordenarLogado';
import ModalAvaliacao from '../components/modalAvaliacao';

const FeedLogado = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dados dos novos professores
  const novosProfessores = [
    { nome: "Professor(a) 1", disciplina: "Disciplina 1", foto: "/lamar.jpg" },
    { nome: "Professor(a) 2", disciplina: "Disciplina 2", foto: "/lamar.jpg" },
    { nome: "Professor(a) 3", disciplina: "Disciplina 3", foto: "/lamar.jpg" },
    { nome: "Professor(a) 4", disciplina: "Disciplina 4", foto: "/lamar.jpg" },
  ];

  // Dados de todos os professores
  const todosProfessores = [
    { nome: "Professor(a) 5", disciplina: "Disciplina 5", foto: "/lamar.jpg" },
    { nome: "Professor(a) 6", disciplina: "Disciplina 6", foto: "/lamar.jpg" },
    { nome: "Professor(a) 7", disciplina: "Disciplina 7", foto: "/lamar.jpg" },
    { nome: "Professor(a) 8", disciplina: "Disciplina 8", foto: "/lamar.jpg" },
  ];

  return (
    <main className="bg-gray-200 min-h-screen">
      <HeaderLogado />
      
      {/* Div de novos professores */}
      <div className="flex flex-row items-center justify-between mt-10  px-6">
        <h2 className="text-3xl font-semibold ml-[5.5rem]">Novos professores</h2>
        <div className="mr-[5.5rem]">
          <input
            type="text"
            placeholder="Buscar professor(a)"
            className="w-full mr-[5.5rem] rounded-md px-3 py-2 h-10 bg-no-repeat bg-[url('/search.png')] pl-10 bg-contain"
          />
        </div>
      </div>

      {/* Card dos novos professores */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-10 max-w-7xl mx-auto">
        {novosProfessores.map((professor, index) => (
          <ProfessorCard
            key={index}
            nome={professor.nome}
            disciplina={professor.disciplina}
            foto={professor.foto}
          />
        ))}
      </section>

      <hr className="border-t-2 border-black my-4 mx-auto w-11/12" style={{ width: "calc(100% - 12rem)" }} />

      {/* Div de todos os professores */}
      <OrdernarLogado />

      {/* Card dos todos os professores */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-10 max-w-7xl mx-auto">
        {todosProfessores.map((professor, index) => (
          <ProfessorCard
            key={index}
            nome={professor.nome}
            disciplina={professor.disciplina}
            foto={professor.foto}
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