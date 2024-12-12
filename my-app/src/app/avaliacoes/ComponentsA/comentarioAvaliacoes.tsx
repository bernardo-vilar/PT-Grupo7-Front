import Image from "next/image"
import SubComentario from "./subcomentario"

const ComentarioAvaliacoes = () => {
    return (
        <>      
            <div className="relative bg-[#3EEE9A] w-[630px] h-[160px] rounded-[32px] opacity-100 my-5 mx-2">                
                <div className="flex item-center absolute my-2 mx-2">
                <Image                                
                        src= "/perfil.png"
                        alt= "Foto de perfil"
                        width={45}
                        height={45}
                        className="rounded-[70px]"
                            >
                </Image>
                <p className="font-bold my-2 mx-2"> Morty Gamer</p>
                <p className="font-inter my-2 text-[#71767B]"> · 17/04/2024, ás 21:42 · João Frango · Surf </p>
                </div>
                <div className="flex item-center justify-center w-[1px] h-[70px] opacity-100 bg-[#000] absolute top-[70px] left-[40px]"> </div>
            <div className="absolute my-11 mx-2 w-full px-10">
                <p className="font-inter font-size: 15px text-[#222E50] w-full px-8">Professor Bacana. Adoro quando falta!</p>
                <div className="flex justify-center item-center absolute my-4">
                        <Image 
                        src="/comment.png"
                        alt="Simbolo de Comentario"
                        width={25}
                        height={25}
                        className="hover:scale-110"
                    ></Image>
                   <p className="font-inter text-[#222E50] mx-2"> 2 comentarios</p>
                </div>
                <div className = "relative bg-[#FF000] w-[630px] h-[100px] rounded-bl-lg-[32px] rounded-br-lg-[32px] opacity-100 mx-[-48] top-[0px]"> </div>
                <SubComentario/>
                <SubComentario/>
            </div>
            </div>
        </>    
    )
}

export default ComentarioAvaliacoes