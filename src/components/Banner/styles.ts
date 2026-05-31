import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover; //é para ocupar toda a alargura disponivel

  .container {
    position: relative;
    padding-top: 480px;
    display: block;
    justify-content: space-between; //joga cada elemento para cantos opóstos
    align-items: flex-end; //sem isso o botão fica do tamanho total da div
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  p {
    margin-left: 600px;
    color: ${cores.corSalmao};
    font-weight: bold;
    font-size: 40px;
    font: Roboto;
    max-width: 40%;
    text-align: center;
  }
`
export const ImagemEfood = styled.div`
  padding: 200px;
  background-repeat: no-repeat;
  margin-top: 64px;
  display: flex;
  margin-left: 900px;
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
`