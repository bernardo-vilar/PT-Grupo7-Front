import Image from "next/image";
import Curso from "./curso"
import Email from "./email"

const DadosDeslogado = () => {
    return (
        <>
            <div
                className="w-[646px] h-[935px] border-t-[0px] border-r-[1px] border-b-[0px] border-l-[1px] opacity-100 bg-[#FFF]"
                style={{
                position: 'absolute',
                top: '63px',
                left: '300px',
                }}
            >
                <div
                    className="w-[646px] h-[151px] opacity-100 bg-[#3EEE9A]"
                    style={{
                    position: 'absolute',
                    top: '0px', 
                    left: '0px',
                    }}
                    >
                        <div className="absolute top-[75px] left-[80px]">
                            <Image                                
                                src= "/perfil.png"
                                alt= "Foto de perfil"
                                width={140}
                                height={140}
                                className="rounded-[70px]"
                                >
                            </Image>
                            <h2 className="font-bold text-lg mt-4">Morty Gamer</h2>
                            <Curso />
                            <Email />
                        </div>
                        <div className="w-[646px] h-[1px] opacity-100 bg-[#000]"
                            style={{
                            position: "absolute",
                            top: "370px",
                            left: "0",
                            }}
                        >
                        </div>

                </div>

            </div>
        </>
    )
}

export default DadosDeslogado;