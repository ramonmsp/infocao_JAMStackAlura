import React, { useState, useEffect } from 'react'
import './styles/index.scss'

import Raca from './components/Raca'
import ListaRacas from './components/ListaRacas'
import Cabecalho from './components/Cabecalho'

import { buscaSobreRacas, buscaTodasRacas } from './api'
import { RacasContextProvider } from './context/RacasContext'
import { StatusContextProvider } from './context/StatusContext'
import { RacaSelecionadaContextProvider } from './context/RacaSelecionadaContext'

export default function App() {

  const [sobreRacas, setSobreRacas] = useState([]);
  const [todasRacas, setTodasRacas] = useState([]);


  useEffect(() => {
    buscaSobreRacas().then(response => setSobreRacas(response.data))
    buscaTodasRacas().then(response => setTodasRacas(response.data))
  }, [])

  const racas = sobreRacas.filter((sobre) =>
    todasRacas.includes(sobre.name.toLowerCase())
  );

 
  return (
    <>
      <RacasContextProvider racas={racas}>
        <StatusContextProvider>
          <RacaSelecionadaContextProvider>
            <div className="container">
              <Cabecalho />
              <Raca />
              <ListaRacas />
            </div>
          </RacaSelecionadaContextProvider>
        </StatusContextProvider>
      </RacasContextProvider>
    </>
  )
}