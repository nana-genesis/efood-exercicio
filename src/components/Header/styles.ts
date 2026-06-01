import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
  padding: 40px 0;

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

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`
