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
  professorName: string; // Nome do professor
  disciplinaName: string; // Nome da disciplina
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

export const createUser = async (user: User) => {
  try {
    const response = await api.post("/user", user); 
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create user");
  }
};

export const loginUser = async (credentials: { email: string; senha: string }) => {
    const response = await api.post("/auth/login", credentials); 
    return response.data; 
  };

export const patchUser = async (user: Partial<User>, id: number) => {
  try {
    const response = await api.patch(`/user/${id}`, user);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update user");
  }
};

export const fetchAvaliacoesByUser = async (userId: number) => {
  try {
    const response = await api.get(
      `/avaliacao/user/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch avaliacoes.");
  }
};

export const deleteUser = async (userId: number) => {
  try {
    const response = await api.delete(
      `/user/${userId}`
    );
    alert("Usuário deletado com sucesso!");
    window.location.href = "/";
  } catch (error) {
    console.error("Error deleting user:", error.message);
    alert("Erro ao deletar o usuário.");
  }
};



// Interface para Professor
interface Professor {
  nome: string;
  disciplinaID: number;  // Modificado para 'disciplinaID', que é um número
  foto: string;
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


export const createAvaliacao = async (avaliacao: Avaliacao) => {
  try {
    const response = await api.post("/avaliacao", avaliacao); 
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create avaliação");
  }
};

export const getDisciplinas = async () => {
  try {
    const response = await api.get("/disciplina");
    return response.data; // Retorna a lista de disciplinas
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Erro ao buscar disciplinas");
  }
};


