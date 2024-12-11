import axios from "axios";

interface User {
  nome: string;
  email: string;
  senha: string;
  curso: string;
  departamento: string;
}

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUser = async () => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};

// Create a new user
export const createUser = async (user: User) => {
  try {
    const response = await api.post("/user", user); 
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create user");
  }
};

// Update user 
export const patchUserReq = async (user: Partial<User>, id: number) => {
  try {
    const response = await api.patch(`/user/${id}`, user); // Update user by ID
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update user");
  }
};


// Interface para Professor
interface Professor {
  nome: string;
  disciplina: string;
  foto: string;
  email?: string; // Adicional, caso necessário
  departamento?: string;
}

// Obter todos os professores
export const getProfessores = async () => {
  try {
    const response = await api.get("/professores"); // A rota do backend para obter todos os professores
    return response.data; // Retorna os dados dos professores
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Falha ao buscar professores");
  }
};

// Criar um novo professor
export const createProfessor = async (professor: Professor) => {
  try {
    const response = await api.post("/professores", professor); // A rota para criar um novo professor
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Falha ao criar professor");
  }
};

// Atualizar informações de um professor
export const patchProfessor = async (professor: Partial<Professor>, id: number) => {
  try {
    const response = await api.patch(`/professores/${id}`, professor); // A rota para atualizar um professor pelo ID
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Falha ao atualizar professor");
  }
};
