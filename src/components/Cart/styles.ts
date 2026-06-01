import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${cores.corSalmao};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    background-color: ${cores.corDePeleFundo};
    color: ${cores.corSalmao};
    border: none;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  color: ${cores.branca};
  font-weight: bold;
  font-size: 14px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.corDePeleFundo};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.corSalmao};
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    color: ${cores.corSalmao};
  }

  button {
    background-image: url('https://raw.githubusercontent.com/gian-mario/efood/main/src/assets/images/lixo.png');
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const EmptyCart = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.branca};
  text-align: center;
`
