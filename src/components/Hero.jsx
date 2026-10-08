import Botao from "./Botao"

const Hero = () => {
  return (
    <div className="bg-blue-500 text-[#FFF8EC] text-center p-8">
      <h1 className="text-4xl mb-2">Hora de brincar de verdade!</h1>
      <h2 className="text-xl text-gray-200 mb-6">Brinquedos escolhidos a dedo para cada fase, do primeiro chocalho ao jogo de tabuleiro em família.</h2>
      <div className="flex justify-center gap-6">
        <Botao className="bg-white text-blue-500 border rounded-[8px] p-2 hover:bg-gray-100">Ver brinquedos</Botao>
        <Botao className="border rounded-[8px] p-2 hover:bg-blue-600">Buscar por idade</Botao>
      </div>
    </div>
  )
}

export default Hero
