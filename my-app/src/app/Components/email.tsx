import {Icon} from '@iconify/react';

const Email = () => {
    return (
        <> 
            <div className="flex items-center space-x-2 my-1.5">
                <Icon icon="eva:email-outline" size={1.5} color="black"/>
                    <p className="font-sans text-[15px] font-normal leading-[18.15px] underline underline-offset-auto decoration-slice">
                        Morty.gamer.23@cjr.org.br
                    </p>
            </div>
        </>
    )
}

export default Email;