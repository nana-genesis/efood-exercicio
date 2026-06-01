import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  p {
    color: ${cores.branca};
    font-size: 36px;
    font-weight: bold;
    max-width: 680px;
    line-height: 42px;
    z-index: 1;
    text-align: center;
    margin: 0 auto;
  }
`

export const BannerContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 32px 0;
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
