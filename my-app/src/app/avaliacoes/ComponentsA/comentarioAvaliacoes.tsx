import Image from "next/image"
import SubComentario from "./subcomentario"

const ComentarioAvaliacoes = ({FotoPerfil, NomeUsuario, CreatedAt, NomeProfessor, DisciplinaProfessor, ConteudoComentario, NumeroComentarios}) => {

    const fotoPerfil = "/JoaoFrango.png"
    const nomeUsuario = "Joao Frango"
    const createdAt = "29 de fev, as 23:99"
    const conteudoComentario = "Tudo em cima bro? Tu viu o Cadu?Tudo em cima bro? Tu viu o Cadu?Tudo em cima bro? Tu viu o Cadu?Tudo em cima bro? Tu viu o Cadu?Tudo em cima bro? Tu viu o Cadu?"
    return (
        <>      
            <div className="relative bg-[#3EEE9A] w-[630px] rounded-[32px] opacity-100 py-16 my-4 mx-2">
                <p className="font-inter text-lg text-[#222E50] w-[590px] mx-12 px-4">{ConteudoComentario}</p>
                <div className="flex absolute my-5 mx-[58px]">
                        <Image 
                        src="/comment.png"
                        alt="Simbolo de Comentario"
                        width={30}
                        height={30}
                        className="hover:scale-110"
                    ></Image>
                   <p className="text-[#222E50] absolute left-[32px] bottom-[1px]" style={{fontFamily: "sans-serif", fontSize: "17px", whiteSpace: "nowrap"}}> {NumeroComentarios} comentarios</p>
                </div>               
                <div className="flex item-center absolute top-[10px] left-[10px]">
                <Image                                
                        src= {FotoPerfil}
                        alt= "Foto de perfil"
                        width={45}
                        height={45}
                        className="rounded-[70px]"
                            >
                </Image>
                <p className="font-bold my-2 mx-2"> {NomeUsuario}</p>
                <p className="font-inter my-2 text-[#71767B]"> · {CreatedAt} · {NomeProfessor} · {DisciplinaProfessor} </p>
                </div>
                <div className="absolute my-11 mx-2 w-full px-10">
            </div>
        </div> 
        <div className="w-[645px] h-[1px] opacity-100 bg-[#000]"></div>
        <SubComentario FotoPerfil={fotoPerfil} NomeUsuario={nomeUsuario} CreatedAt={createdAt} ConteudoComentario={conteudoComentario} />
        <SubComentario FotoPerfil={fotoPerfil} NomeUsuario={nomeUsuario} CreatedAt={createdAt} ConteudoComentario={conteudoComentario} />
        <SubComentario FotoPerfil={fotoPerfil} NomeUsuario={nomeUsuario} CreatedAt={createdAt} ConteudoComentario={conteudoComentario} />
        </>      
    )
}

export default ComentarioAvaliacoes