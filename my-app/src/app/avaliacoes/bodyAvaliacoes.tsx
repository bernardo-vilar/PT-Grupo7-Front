import BotaoVoltar from "./ComponentsA/botaoVoltar";
import ComentarioAvaliacoes from "./ComponentsA/comentarioAvaliacoes";

const BodyAvaliacoes = () => {
    return (
        <>
        
            <div className="flex items-center justify-center h-screen bg-gray-200">
                <div className="relative top-[0px] left-[1/2] w-[646px] h-screen border-t-[0px] border-r-[1px] border-b-[0px] border-l-[1px] border-black opacity-100 bg-[#FFF]">
                    <BotaoVoltar />
                    <div className="absolute top-[0px]">
                    <ComentarioAvaliacoes /> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyAvaliacoes
