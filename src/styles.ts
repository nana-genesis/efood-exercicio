import { createGlobalStyle } from 'styled-components'

export type Cores = {
  branca: string
  corSalmao: string
  bege: string
  corDePeleFundo: string
  corDePeleFundoEscuro: string
  begeClaro: string
  fundo: string
  preto: string
}

export const cores: Cores = {
  branca: '#fff',
  corSalmao: '#E66767',
  bege: '#FFEBD9',
  corDePeleFundo: '#FFEBD9',
  corDePeleFundoEscuro: '#ffebc1',
  begeClaro: '#FFF8F2',
  fundo: '#FFF8F2',
  preto: '#000'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.corSalmao};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      width: 90%;
    }
  }

  .loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    width: 100%;
    color: ${cores.corSalmao};
    font-weight: bold;
  }
`
