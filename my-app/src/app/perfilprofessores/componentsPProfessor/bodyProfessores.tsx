import Image from "next/image";
import Departamento from "./Departamento";
import Cursos from "./cursos";
import BotaoVoltar from "./botaoVoltar";
import Comentario from "./comentario";

const BodyProfessores = ({FotoPerfilProfessores, NomeProfessor}) => {

    const cursosProfessor = "Muitos cursos"
    const departamentoProfessor = "CIC"
    const fotoPerfilComentario = "/perfil.png"
    const nomeUsuarioComentario = "Morty Gamer"
    const createdAt = "29 de fev, as 23:99"
    const nomeProfessor = "Joao Frango"
    const disciplinaProfessor = "Surf"
    const conteudoComentario = "Professor Bacana. Adoro quando falta!Professor Bacana. Adoro quando falta!Professor Bacana. Adoro quando falta!Professor Bacana. Adoro quando falta!"
    const numeroComentarios = "10"

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-200">
                <div 
                    className=" relative top-[0px] left-[1/2] w-[646px] h-screen border-t-[0px] border-r-[1px] border-b-[0px] border-l-[1px] border-black opacity-100 bg-[#FFF]"
                >   
                <div
                    className="absolute top-[0px] letf-[0px] w-[644px] h-[151px] opacity-100 bg-[#3EEE9A]"

                    >
                        <div>
                            <Image                                
                                src= {FotoPerfilProfessores}
                                alt= "Foto de perfil"
                                width={140}
                                height={140}
                                className="rounded-[70px] relative top-[75px] left-[60px]"
                            >
                            </Image>
                            <h2 className="relative top-[70px] left-[75px] font-bold text-lg mt-4">{NomeProfessor}</h2>
                            <Departamento DepartamentoProfessor={departamentoProfessor}/>
                            <Cursos CursosProfessor={cursosProfessor}/>
                        </div>
                        <div className="flex item-center justify-center w-[646px] h-[1px] opacity-100 bg-[#000] absolute top-[350px]"> </div>
                        <BotaoVoltar />
                        <div className="absolute top-[350px] left-[10px]">
                            <h2 className="font-bold text-black">Publicações</h2>
                        </div>
                        <div className="absolute top-[380px]"> 
                            <Comentario FotoPerfil={fotoPerfilComentario} NomeUsuario={nomeUsuarioComentario} CreatedAt={createdAt} NomeProfessor={nomeProfessor} DisciplinaProfessor={disciplinaProfessor} ConteudoComentario={conteudoComentario} NumeroComentarios={numeroComentarios}/></div>  
                </div>
            </div>
        </div>
        </>
    )
}

export default BodyProfessores;