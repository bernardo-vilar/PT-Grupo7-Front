import React from 'react'

const OrdernarLogado = () => {
  return (
    <div>
       {/*Div de todos os professores */}
       <div className="flex flex-row items-center border: top-3 mt-3 justify-between">
        <h2 className="text-3xl  ml-32 mt-20 font-semibold">
          Todos os professores
        </h2>
        <div className="flex gap-0">
        <button className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 border-2 border-white h-10 w-auto flex mr-[1rem] relative top-[2.5rem]">
          Nova publicação
        </button>
        <button className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 border-2 border-white h-10 w-auto flex mr-[8rem] relative top-[2.5rem]">
          Ordenar
        </button>
        </div>
      </div>
    </div>
  )
}

export default OrdernarLogado;
