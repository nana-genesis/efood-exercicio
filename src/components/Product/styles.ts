import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid ${cores.corSalmao};
  position: relative;
  color: ${cores.corSalmao};
  display: flex;
  flex-direction: column;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardContent = styled.div`
  padding: 8px;
  border-top: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;

  img {
    margin-left: 8px;
    width: 21px;
    height: 21px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
