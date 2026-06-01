import styled from 'styled-components'
import { cores } from '../../styles'
import fundoCabecalho from '../../assets/images/VectorFundoCabecalho.png'

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
  background-image: url(${fundoCabecalho});
  padding: 40px 0 64px;

  .container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  a, span {
    color: ${cores.corSalmao};
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;
  }
`

export const HeaderHero = styled.header`
  height: 384px;
  background-color: ${cores.bege};
  background-image: url(${fundoCabecalho});
  background-repeat: repeat;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${Logo} {
    margin-top: 40px;
  }

  h1 {
    max-width: 540px;
    margin-top: 138px;
    color: ${cores.corSalmao};
    font-size: 36px;
    line-height: 42px;
    font-weight: 900;
    text-align: center;
  }

  @media (max-width: 768px) {
    h1 {
      margin-top: 96px;
      font-size: 30px;
      line-height: 36px;
    }
  }
`

export const HeaderRow = styled.div`
  display: contents; /* Mantém o grid do pai */
`

export const LinkCart = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  img {
    width: 21px;
    height: 20px;
  }
`
