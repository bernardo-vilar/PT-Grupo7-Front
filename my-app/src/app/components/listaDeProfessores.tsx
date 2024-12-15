// components/ListaDeProfessores.js
import ProfessorCard from "./professorCard";

const ListaDeProfessores = ({ professores }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-10 max-w-7xl mx-auto">
      {professores.map((professor, index) => (
        <ProfessorCard
          key={index}
          id={professor.id}
          nome={professor.nome}
          disciplina={professor.disciplina}
          foto={professor.foto}
        />
      ))}
    </section>
  );
};

export default ListaDeProfessores;
