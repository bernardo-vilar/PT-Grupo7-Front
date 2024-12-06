import Image from "next/image";

export default function Page() {
  return ( 
    <main className="flex h-screen">
      {/*Parte da Esquerda*/}
      <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: 'url("/lamar.jpg")'}}>
      </div>

      {/*Parte da Direita*/}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center">

        {/*Elementos Direita*/}
        <div className="max-w-sm">

          {/*Titulo*/}
          <h1 className="text-4xl text-center mb-8 font-medium">
            Cadastrar usuário
          </h1>

          {/*Inputs*/}
          <input className="w-full mb-4 p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200" type="name" placeholder="Nome" required/>
          <input className="w-full mb-4 p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200" type="email" placeholder="Email" required/>
          <input className="w-full mb-4 p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200" type="password" placeholder="Senha" required/>
          <input className="w-full mb-4 p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200" type="curso" placeholder="Curso" required/>
          <input className="w-full p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200" type="departamento" placeholder="Departamento" required/>

          <div className="flex justify-center gap-12 mt-16">
            <a href="/login"> 
            <button className="w-40 p-2 rounded-2xl bg-emerald-200 hover:bg-emerald-300 hover:scale-95 duration-150 border border-blue-900 text-blue-900">
              Criar Conta
            </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}