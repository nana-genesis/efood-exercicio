import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'restaurants'>>`
  padding: 80px 0;
  background-color: ${cores.fundo};

  ${Card} {
    margin-bottom: 48px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 1024px) {
    column-gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
