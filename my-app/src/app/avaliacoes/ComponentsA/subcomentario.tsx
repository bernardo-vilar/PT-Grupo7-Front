import Image from "next/image"


const SubComentario = ({FotoPerfil, NomeUsuario, CreatedAt, ConteudoComentario}) => {
    return (
        <> 
            <div className="relative mx-4 my-8 bg-[#3EEE9A] w-[610px] rounded-[32px] opacity-100 py-6">
                <div className="absolute top-[-10px] left-[50%] border-left-[10px] bg-[#3EEE9A] h-[20px] w-[20px] rotate-[45deg]"></div> 
                <div className="flex items-center gap-2 absolute top-[10px] left-[15px]">
                    <Image
                    src= {FotoPerfil}
                    alt= "Foto de perfil"
                    width={35}
                    height={35}
                    className="rounded-full"
                    />
                    <p className="font-bold text-[#222E50]" style = {{fontSize: "18px", whiteSpace: "nowrap"}}> {NomeUsuario}</p>
                    <p className="font-inter text-[#71767B]" style = {{fontSize:"16px", whiteSpace: "nowrap"}}>· {CreatedAt}</p>
                </div>
                <p className="font-inter text-[#22E50] w-[570px] my-[18px] mx-12 px-4" style={{fontSize:"18px",whiteSpace:"normal"}}> {ConteudoComentario}</p>
            </div>
    </>
    )
}

export default SubComentario