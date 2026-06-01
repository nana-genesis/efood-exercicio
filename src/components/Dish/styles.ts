import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.corSalmao};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  color: ${cores.bege};

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 4px;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
    flex: 1;
  }

  ${ButtonContainer} {
    background-color: ${cores.bege};
    color: ${cores.corSalmao};
    border: none;
    width: 100%;
    font-size: 14px;
    padding: 4px 0;
    cursor: pointer;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  background-color: ${cores.corSalmao};
  padding: 32px;
  color: ${cores.branca};
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;

    img {
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }

  main {
    display: flex;
    gap: 24px;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    div {
      h3 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
      }

      p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
        color: ${cores.branca} !important; /* Força a cor branca para a descrição */
      }

      ${ButtonContainer} {
        background-color: ${cores.bege};
        color: ${cores.corSalmao};
        border: none;
        width: auto;
        padding: 4px 8px;
      }
    }
  }

  @media (max-width: 768px) {
    main {
      flex-direction: column;
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
`
