"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-200 h-screen">
      <header className="bg-customGreen flex h-[4rem] items-center justify-between">
        <Image
          src="/LogoUnB.png"
          alt="Logo da Universidade de Brasília"
          width={75}
          height={75}
          className="m-4 hover:scale-110"
        ></Image>
        <a href="/login">
          <button className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 mr-4 border-2 border-white h-10 w-auto flex items-center justify-center">
            Login
          </button>
        </a>
      </header>

      {/*Div de novos professores */}
      <div className="flex flex-row items-center border: top-3 mt-3 justify-between">
        <h2 className="text-3xl  ml-32 mt-20 font-semibold">
          Novos professores
        </h2>
        <div>
          <input
            type="text"
            placeholder="Buscar professor(a)"
            className="rounded-md px-2 m-2 h-10 w-96 mr-32 bg-no-repeat bg-[url('/search.png')] pl-10 bg-contain"
          />
        </div>
      </div>

      {/*Card dos novos professores*/}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-10 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 h-52">
          <div className="h-24 w-24 rounded-full overflow-hidden relative">
            <Image
              src="/lamar.jpg"
              alt="Foto do professor(a) 1"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-bold text-lg mt-4">Professor(a) 1</h3>
          <p className="text-sm text-gray-500">Disciplina 1</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 h-52">
          <div className="h-24 w-24 rounded-full overflow-hidden relative">
            <Image
              src="/lamar.jpg"
              alt="Foto do professor(a) 2"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-bold text-lg mt-4">Professor(a) 2</h3>
          <p className="text-sm text-gray-500">Disciplina 2</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 h-52">
          <div className="h-24 w-24 rounded-full overflow-hidden relative">
            <Image
              src="/lamar.jpg"
              alt="Foto do professor(a) 3"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-bold text-lg mt-4">Professor(a) 3</h3>
          <p className="text-sm text-gray-500">Disciplina 3</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 h-52">
          <div className="h-24 w-24 rounded-full overflow-hidden relative">
            <Image
              src="/lamar.jpg"
              alt="Foto do professor(a) 4"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-bold text-lg mt-4">Professor(a) 4</h3>
          <p className="text-sm text-gray-500">Disciplina 4</p>
        </div>
      </section>
      <hr
        className="border-t-2 border-black my-4 mx-auto w-11/12"
        style={{ width: "calc(100% - 12rem)" }}
      />

      {/*Div de todos os professores */}
      <div className="flex flex-row items-center border: top-3 mt-3 justify-between">
        <h2 className="text-3xl  ml-32 mt-20 font-semibold">
          Todos os professores
        </h2>
      </div>

      {/*Card dos professores*/}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 h-52">
          <div className="h-24 w-24 rounded-full overflow-hidden relative">
            <Image
              src="/lamar.jpg"
              alt="Foto do professor(a) 5"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-bold text-lg mt-4">Professor(a) 5</h3>
          <p className="text-sm text-gray-500">Disciplina 5</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 h-52">
          <div className="h-24 w-24 rounded-full overflow-hidden relative">
            <Image
              src="/lamar.jpg"
              alt="Foto do professor(a) 6"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-bold text-lg mt-4">Professor(a) 6</h3>
          <p className="text-sm text-gray-500">Disciplina 6</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 h-52">
          <div className="h-24 w-24 rounded-full overflow-hidden relative">
            <Image
              src="/lamar.jpg"
              alt="Foto do professor(a) 7"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-bold text-lg mt-4">Professor(a) 7</h3>
          <p className="text-sm text-gray-500">Disciplina 7</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 h-52">
          <div className="h-24 w-24 rounded-full overflow-hidden relative">
            <Image
              src="/lamar.jpg"
              alt="Foto do professor(a) 8"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={100}
              height={100}
            />
          </div>
          <h3 className="font-bold text-lg mt-4">Professor(a) 8</h3>
          <p className="text-sm text-gray-500">Disciplina 8</p>
        </div>
      </section>
      <hr
        className="border-t-2 border-black my-4 mx-auto w-11/12"
        style={{ width: "calc(100% - 12rem)" }}
      />
    </main>
  );
}

