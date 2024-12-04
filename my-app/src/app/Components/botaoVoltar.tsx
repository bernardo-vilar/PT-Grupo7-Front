import Image from 'next/image';

const BotaoVoltar = () => {
  return (
        <>
            <div>
                <Image
                    src="/voltar.png"
                    alt="voltar"
                    width={60}
                    height={60}
                    className="hover:scale-110 absolute top-[30px] left-[-80px]"
                >
                </Image>
            </div>
        </>
  )
}

export default BotaoVoltar;