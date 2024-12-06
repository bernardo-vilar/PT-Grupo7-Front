import Icon from '@mdi/react';
import { mdiOfficeBuilding } from '@mdi/js';

const Curso = () => {
    return (
        <>
            <div className="relative top-[65px] left-[70px] my-1.5 flex items-center space-x-2">
                <Icon path={mdiOfficeBuilding} size={1.0} color="black"/>
                <p className="font-sans text-[15px] font-normal leading-[18.15px] underline underline-offset-auto decoration-slice">
                Ciencia da Computacao / Dept. Ciencia da Computacao
                </p>
            </div>
        </>
    )
}

export default Curso;