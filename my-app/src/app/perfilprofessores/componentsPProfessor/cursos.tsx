import Image from 'next/image';


const Cursos = ({CursosProfessor}) => {
    return (
        <>
            <div className="relative top-[65px] left-[70px] my-1.5 flex items-center space-x-2">
                <Image 
                    src = "/Livro.png"
                    alt = "Cursos"
                    width = {20}
                    height = {20}
                ></Image>
                <p className="font-sans text-[15px] font-normal leading-[18.15px] underline underline-offset-auto decoration-slice">
                {CursosProfessor}
                </p>
            </div>
        </>
    )
}

export default Cursos;