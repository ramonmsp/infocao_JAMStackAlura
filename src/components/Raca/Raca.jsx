import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'
import { useRacaSelecionada } from '../../context/RacaSelecionadaContext'

function Raca() {
  const raca = useRacaSelecionada();
  const racaFoiSelecionada = Boolean(raca);

  return (
    racaFoiSelecionada
    ?
    <RacaSelecionada />
    :
    <RacaNaoSelecionada />
  )
}

export default Raca