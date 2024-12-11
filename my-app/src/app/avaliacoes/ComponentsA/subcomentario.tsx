import Image from "next/image"


const SubComentario = () => {
    return (
        <>
            <div className="bg-[#3EEE9A] w-[630px] h-[120px] rounded-bl-[32px] rounded-br-[32px] opacity-100 my-[-60] mx-[-48]">
                <div className="flex item-center justify-center w-[1px] h-[60px] opacity-100 bg-[#000] mx-10">
                    <div className = "flex item-center justify-center absolute">
                        <div className = "flex item-center justify-center w-[40px] h-[1px] opacity-100 bg-[#000] absolute top-[60px] left-[0px]"> 
                            <Image
                            src= "/JoaoFrango.png"
                            alt= "Foto de perfil"
                            width={35}
                            height={35}
                            className="rounded-[70px] absolute top-[-18px] left-[50px]"
                            ></Image>
                            <p className="font-bold text-[#222E50] absolute top-[-10px] left-[95px]" style = {{fontSize: "14px", whiteSpace: "nowrap"}}> Joao Frango</p>
                            <p className="font-inter text-[#71767B] absolute top-[-10px] left-[180px]" style = {{fontSize:"14px", whiteSpace: "nowrap"}}>· 17/04/2024, ás 21:43</p>
                            <p className="font-inter text-[#22E50] my-3 absolute left-[100px]" style={{fontSize:"14px", whiteSpace:"nowrap"}}> tudo em cima bro?</p>
                        </div> 
                    </div>
                </div>
            </div>

        </>
    )
}

export default SubComentario