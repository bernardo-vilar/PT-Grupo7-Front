import HeaderDeslogado from "../components/headerDeslogado";
import BodyProfessores from "./componentsPProfessor/bodyProfessores";

export default function PerfilProfessoresDeslogado() {
  return (
    <main className="bg-gray-200 min-h-screen">
      <HeaderDeslogado />
      <BodyProfessores />
    </main>
  );
}