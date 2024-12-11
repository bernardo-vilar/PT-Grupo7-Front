import Image from 'next/image';
import Link from 'next/link';

const BotaoVoltar = () => {
  return (
        <>
            <div>
            <Link href={"/feed"}> 
                <Image
                    src="/voltar.png"
                    alt="voltar"
                    width={60}
                    height={60}
                    className="hover:scale-110 absolute top-[30px] left-[-80px]"
                >
                </Image>
                </Link>
            </div>
        </>
  )
}

export default BotaoVoltar;