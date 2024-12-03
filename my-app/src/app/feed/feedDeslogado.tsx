"use client";
import ProfessorCard from "../components/professorCard";
import HeaderDeslogado from "../components/headerDeslogado";
import OrdernarDeslogado from "../components/ordernarDeslogado";

export default function FeedDeslogado() {
  return (
    <main className="bg-gray-200 h-screen">
      <HeaderDeslogado />
      {/*Div de novos professores */}
      <div className="flex flex-row items-center border: top-3 mt-3 justify-between">
        <h2 className="text-3xl ml-32 mt-20 font-semibold">Novos professores</h2>
        <div>
          <input
            type="text"
            placeholder="Buscar professor(a)"
            className="rounded-md px-2 m-2 h-10 w-96 mr-32 bg-no-repeat bg-[url('/search.png')] pl-10 bg-contain"
          />
        </div>
      </div>

      {/*Card dos novos professores*/}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-10 max-w-7xl mx-auto">
        <ProfessorCard
          nome="Professor(a) 1"
          disciplina="Disciplina 1"
          foto="/lamar.jpg"
        />
        <ProfessorCard
          nome="Professor(a) 2"
          disciplina="Disciplina 2"
          foto="/lamar.jpg"
        />
        <ProfessorCard
          nome="Professor(a) 3"
          disciplina="Disciplina 3"
          foto="/lamar.jpg"
        />
        <ProfessorCard
          nome="Professor(a) 4"
          disciplina="Disciplina 4"
          foto="/lamar.jpg"
        />
      </section>

      <hr className="border-t-2 border-black my-4 mx-auto w-11/12" style={{ width: "calc(100% - 12rem)" }} />

      {/*Div de todos os professores */}
      <OrdernarDeslogado />

      {/*Card dos professores*/}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 max-w-7xl mx-auto">
        <ProfessorCard
          nome="Professor(a) 5"
          disciplina="Disciplina 5"
          foto="/lamar.jpg"
        />
        <ProfessorCard
          nome="Professor(a) 6"
          disciplina="Disciplina 6"
          foto="/lamar.jpg"
        />
        <ProfessorCard
          nome="Professor(a) 7"
          disciplina="Disciplina 7"
          foto="/lamar.jpg"
        />
        <ProfessorCard
          nome="Professor(a) 8"
          disciplina="Disciplina 8"
          foto="/lamar.jpg"
        />
      </section>

      <hr className="border-t-2 border-black my-4 mx-auto w-11/12" style={{ width: "calc(100% - 12rem)" }} />
    </main>
  );
}
