import HeaderDeslogado from "../components/headerDeslogado";
import BodyProfessores from "./componentsPProfessor/bodyProfessores";

export default function PerfilProfessoresDeslogado() {

  const FotoPerfilProfessores = "/PerfilProfessores.png"
  const nomeProfessores = "Rick Sanches"

  return (
    <main className="bg-gray-200 min-h-screen">
      <HeaderDeslogado />
      <BodyProfessores FotoPerfilProfessores={FotoPerfilProfessores} NomeProfessor={nomeProfessores}/>
    </main>
  );
}