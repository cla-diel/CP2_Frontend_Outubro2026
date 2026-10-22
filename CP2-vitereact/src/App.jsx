import Card from "./componentes/Card";
import Botao from "./componentes/Botao";
import cachorrocaramelo from './assets/cachorrocaramelo.jpg';

function App() {
  return (
    <main className="p-6 min-h-screen bg-fundo flex items-center justify-center">
      <section className="flex min-h-140 w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-white p-12 shadow-xl md:flex-row md:gap-16 md:p-20">

        <img className="size-56 shrink-0 rounded-md shadow-xl md:size-64"
          src={cachorrocaramelo} alt="Cachorro Caramelo" />

        <Card titulo="Presidente do Brasil - 99">
          <p className="flex gap-2 font-medium text-letra">Para votar no melhor candidato a Presidente do Brasil
            vote em 99 para Cachorro Caramelo, pois assim o país tem 99%
            de chance de melhorar!</p>
        </Card>

        <Botao>Votar</Botao>
      </section>
    </main>
  );
}
export default App;
