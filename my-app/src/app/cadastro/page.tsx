"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/utils/api"; 

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    curso: "",
    departamento: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await createUser(formData);

      alert("Usuário registrado com sucesso!");
      router.push("/login");
    } catch (error: any) {
      console.error("Erro ao registrar usuário:", error.message || error);
      alert("Erro ao registrar usuário. Tente novamente.");
    }
  };

  return (
    <main className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("/lamar.jpg")' }}></div>

      {/* Right Side */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-sm">
          <h1 className="text-4xl text-center mb-8 font-medium">Cadastrar usuário</h1>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <input
              className="w-full mb-4 p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200"
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <input
              className="w-full mb-4 p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full mb-4 p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200"
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <input
              className="w-full mb-4 p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200"
              type="text"
              name="curso"
              placeholder="Curso"
              value={formData.curso}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200"
              type="text"
              name="departamento"
              placeholder="Departamento"
              value={formData.departamento}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full p-3 mt-4 rounded-xl bg-emerald-200 hover:bg-emerald-300 hover:scale-95 duration-150 border border-blue-900 text-blue-900"
            >
              Criar Conta
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
