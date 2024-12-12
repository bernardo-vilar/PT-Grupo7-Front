import HeaderLogado from "../components/headerLogado";
import BodyProfessores from "./componentsPProfessor/bodyProfessores";


const PerfilProfessoresLogado = () => {

  const fotoPerfilProfessores = "/PerfilProfessores.png"
  const nomeProfessores = "Rick Sanches"

  return (
    <main className="bg-gray-200 h-screen">
      <HeaderLogado />
      <BodyProfessores FotoPerfilProfessores={fotoPerfilProfessores} NomeProfessor={nomeProfessores}/>
    </main>
  );
};

export default PerfilProfessoresLogado;