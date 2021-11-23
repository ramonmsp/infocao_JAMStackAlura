import React from 'react'
import { useRacas } from '../../context/RacasContext'
import { useSelecionaRaca } from '../../context/RacaSelecionadaContext';
import './styles.scss'

function ListaRacas() {
  const racas = useRacas();
  const selecionaRaca = useSelecionaRaca();

  return (
    <ul className="lista-racas">
      {
        racas.map(raca => (
          <li
            className="lista-racas__item"
            key={raca.id}
            onClick={() => selecionaRaca(raca.name)}
          >
            {raca.name}
          </li>
        ))
      }
    </ul>
  )
}

export default ListaRacas