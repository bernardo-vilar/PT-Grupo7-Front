import HeaderDeslogado from "./Components/headerDeslogado";
import DadosDeslogado from "./Components/dadosDeslogado";
import BotaoVoltar from "./Components/botaoVoltar";
import Comentario from "./Components/comentario";

export default function PerfilDeslogado() {
  return (
    <main className="bg-gray-200 h-screen">
      <HeaderDeslogado />
      <BotaoVoltar />
      <DadosDeslogado />
    </main>
  );
}

