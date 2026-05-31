import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'food'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preto : cores.corSalmao};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.corDeFundoHome : cores.preto};
    padding: 80px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr; //é para criar 2 colunas
  column-gap: 24px; //dá um expaço entre as colunas
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`