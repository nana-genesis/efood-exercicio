import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.corSalmao};
  color: ${cores.bege};
  border: none;
  padding: 4px 6px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.corSalmao};
  color: ${cores.bege};
  border: none;
  padding: 4px 6px;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
`
