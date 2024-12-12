import axios from "axios";

interface User {
  nome: string;
  email: string;
  senha: string;
  curso: string;
  departamento: string;
}

interface Avaliacao {
  authorId: number; 
  professorID: number; 
  disciplinaID: number; 
  conteudo: string; 
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


// Create a new avaliação
export const createAvaliacao = async (avaliacao: Avaliacao) => {
  try {
    const response = await api.post("/avaliacao", avaliacao); 
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create avaliação");
  }
};


export const getProfessorByName = async (nome: string) => {
  try {
    const response = await api.get(`/professor?nome=${nome}`);
    return response.data; // Supondo que a API retorna o objeto do professor
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch professor");
  }
};

export const getDisciplinaByName = async (nome: string) => {
  try {
    const response = await api.get(`/disciplina?nome=${nome}`);
    return response.data; // Supondo que a API retorna o objeto da disciplina
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch disciplina");
  }
};
