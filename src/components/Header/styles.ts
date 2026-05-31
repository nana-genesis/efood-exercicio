import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.corDePeleFundo};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.corSalmao};
    text-decoration: none;
    font-weight: bold;
  }

  img {
    max-width: 70px;
    margin-left: 100px;
  }
`

export const Links = styled.ul`
  display: flex;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`