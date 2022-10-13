import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h2>Sua pontuação: <span>{score}</span></h2>
      <button onClick={retry}>Tente novamente</button>
    </div>
  )
}

export default GameOver