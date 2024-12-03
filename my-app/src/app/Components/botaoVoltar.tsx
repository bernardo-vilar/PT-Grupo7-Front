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
                    className="hover:scale-110"
                    style={{
                    position: 'absolute',
                    top: '75px',
                    left: '228px',
                }}
                >
                </Image>
            </div>
        </>
  )
}

export default BotaoVoltar;