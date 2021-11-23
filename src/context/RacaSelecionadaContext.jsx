
  
import React, { createContext, useContext, useState } from "react";
import { buscaImagemPorRaca } from "../api";
import { useRacas } from "./RacasContext";
import { useSetStatus } from "./StatusContext";

const RacaSelecionadaContext = createContext();

export function useRacaSelecionada() {
  return useContext(RacaSelecionadaContext).racaSelecionada;
}

export function useSelecionaRaca() {
  return useContext(RacaSelecionadaContext).selecionaRaca;
}

export function RacaSelecionadaContextProvider({ children }) {
  const racas = useRacas();
  const setStatus = useSetStatus();

  const [racaSelecionada, setRacaSelecionada] = useState(null);

  function selecionaRaca(raca) {
    const infoSelecionada = racas.filter((infoRaca) => infoRaca.name === raca);

    buscaImagemPorRaca(raca)
      .then((imagem) => {
        setRacaSelecionada({
          imagem,
          ...infoSelecionada[0],
        });

        setStatus(
          "A imagem sempre será diferente, pode clicar quantas vezes quiser!"
        );
      })
      .catch((erro) => {
        const eh404 = erro.response.status === 404;

        const mensagem = eh404
          ? "Não encontramos essa raça :("
          : "Oops, algo deu errado. Pode tentar novamente?";

        setStatus(mensagem);
      });
  }

  return (
    <RacaSelecionadaContext.Provider value={{ racaSelecionada, selecionaRaca }}>
      {children}
    </RacaSelecionadaContext.Provider>
  );
}