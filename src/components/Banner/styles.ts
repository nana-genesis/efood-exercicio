import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`

export const BannerContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 24px 0 32px;
`

export const BannerTag = styled.span`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branca};
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branca};
`
