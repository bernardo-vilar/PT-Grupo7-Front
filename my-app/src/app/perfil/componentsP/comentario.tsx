import Image from "next/image"
import Link from 'next/link';

const Comentario = ({FotoPerfil, NomeUsuario, CreatedAt, NomeProfessor, DisciplinaProfessor, ConteudoComentario, NumeroComentarios, onDelete,}) => {
    return (
        <>      
            <div className="relative bg-[#3EEE9A] w-[630px] rounded-[32px] opacity-100 py-10 my-4 mx-2">
            {onDelete && (
                <button
                onClick={onDelete}
                className="absolute top-3 right-4 text-red-600 hover:text-red-800 text-sm font-bold"
            >
                Excluir
                </button>
            )}
                <p className="font-inter text-[#222E50] text-lg w-[590px] my-3 mx-12 px-4">{ConteudoComentario}</p>
                <div className="flex item-center absolute top-[10px] left-[10px]">
                <Image                                
                        src= {FotoPerfil}
                        alt= "Foto de perfil"
                        width={45}
                        height={45}
                        className="rounded-[70px]"
                            >
                </Image>
                <p className="font-bold my-2 mx-2">{NomeUsuario}</p>
                <p className="font-inter my-2 text-[#71767B]"> {CreatedAt} · {NomeProfessor} · {DisciplinaProfessor} </p>
                </div>
                <div className="absolute my-11 mx-2 w-full px-10">
            </div>
            <div className="flex absolute bottom-[5px] left-[55px]"> 
                <Link href={"/avaliacoes"}>
                    <Image 
                    src="/comment.png"
                    alt="Simbolo de Comentario"
                    width={30}
                    height={30}
                    className="hover:scale-110"
                ></Image>
                </Link>
                <p className="text-[#222E50] absolute left-[30px] bottom-[1px]" style={{fontFamily: "sans-serif", fontSize: "17px", whiteSpace: 'nowrap'}}> {NumeroComentarios} comentarios</p>

            </div>
            </div>
        </>    
    )
}

export default Comentario