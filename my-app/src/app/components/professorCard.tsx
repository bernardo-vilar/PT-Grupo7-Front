import Image from 'next/image';
import Link from 'next/link';

const ProfessorCard = ({ id, nome, disciplina, foto }) => {
  const fotoUrl = foto || '/lamar.jpg';

  return (
    <Link href={`/professor/${id}`} passHref>
      <div className="bg-white rounded-lg shadow-md p-4 h-52 cursor-pointer">
        <div className="h-24 w-24 rounded-full overflow-hidden relative">
          <Image
            src={fotoUrl}
            alt={`Foto do(a) ${nome}`}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width={100}
            height={100}
          />
        </div>
        <h3 className="font-bold text-lg mt-4">{nome}</h3>
        <p className="text-sm text-gray-500">{disciplina?.nome || 'Disciplina não atribuída'}</p>
      </div>
    </Link>
  );
};

export default ProfessorCard;
