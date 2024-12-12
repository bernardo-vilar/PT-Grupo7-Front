import BotaoVoltar from "./ComponentsA/botaoVoltar";
import ComentarioAvaliacoes from "./ComponentsA/comentarioAvaliacoes";

const BodyAvaliacoes = () => {

    const fotoPerfil = "/perfil.png"
    const nomeUsuario = "Morty Gamer"
    const createdAt = "29 de fev, as 23:99"
    const nomeProfessor = "Rick Sanches"
    const disciplinaProfessor = "Muitos cursos"
    const conteudoComentario = "Professor bacana. Adoro quando falta!"
    const numeroComentarios = "5"
    return (
        <>
        
            <div className="flex items-center justify-center h-screen bg-gray-200">
                <div className="relative top-[0px] left-[1/2] w-[646px] h-screen border-t-[0px] border-r-[1px] border-b-[0px] border-l-[1px] border-black opacity-100 bg-[#FFF]">
                    <BotaoVoltar />
                    <div className="absolute top-[0px]">
                    <ComentarioAvaliacoes FotoPerfil={fotoPerfil} NomeUsuario={nomeUsuario} CreatedAt={createdAt} NomeProfessor={nomeProfessor} DisciplinaProfessor={disciplinaProfessor} ConteudoComentario={conteudoComentario} NumeroComentarios={numeroComentarios}/> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyAvaliacoes
