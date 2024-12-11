"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/api";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "senha") {
      setSenha(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, senha });
      console.log(response.message);
      alert('Login successful!');
      router.push("/feed"); 
    } catch (error: any) {
      console.error("Login failed:", error.message || error);
      setErrorMessage("Erro ao realizar login. Tente novamente."); 
    }
  };

  return (
    <main className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("/lamar.jpg")' }}></div>

      {/* Right Side */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-sm">
          <h1 className="text-4xl text-center mb-8 font-medium">Avaliação de Professores</h1>

          {/* Display Error Message */}
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <input
              className="w-full mb-4 p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full mb-4 p-3 rounded-xl focus:outline-none focus:ring focus:ring-emerald-200"
              type="password"
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full p-3 mt-4 rounded-xl bg-emerald-200 hover:bg-emerald-300 hover:scale-95 duration-150 border border-blue-900 text-blue-900"
            >
              Entrar
            </button>
          </form>

          <div className="flex justify-center gap-12 mt-16">
            <Link href={"/cadastro"}>
              <button className="w-40 p-2 rounded-2xl bg-emerald-200 hover:bg-emerald-300 hover:scale-95 duration-150 border border-blue-900 text-blue-900">
                Criar Conta
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
