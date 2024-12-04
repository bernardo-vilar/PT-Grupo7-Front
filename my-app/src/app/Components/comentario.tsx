import Image from "next/image"

const Comentario = () => {
    return (
        <>      
            <div className="bg-[#3EEE9A] w-[630px] h-[160px] rounded-[32px] opacity-100 my-2 mx-2">
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
            <div className="absolute my-11 mx-2 w-full px-10">
                <p className="font-inter text-[#222E50] text-sm w-full px-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin</p>
                <div className="flex justify-center item-center absolute my-2">
                    <Image 
                        src="/comment.png"
                        alt="Simbolo de Comentario"
                        width={25}
                        height={25}
                        className="hover:scale-110"
                    ></Image>
                    <p className="font-inter text-[#222E50] mx-2"> 2 comentarios</p>

            </div>
            </div>
            </div>
        </>    
    )
}

export default Comentario