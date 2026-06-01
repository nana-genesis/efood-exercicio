import styled from 'styled-components'
import { cores } from '../../styles'

export const Sidebar = styled.aside`
  background-color: ${cores.corSalmao};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  color: ${cores.corDePeleFundo};

  button {
    margin-top: 8px;
    width: 100%;
    background-color: ${cores.corDePeleFundo};
    color: ${cores.corSalmao};
    border: none;
    padding: 8px;
    font-weight: bold;
    cursor: pointer;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  margin-bottom: 8px;
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
  }
  input {
    background-color: ${cores.corDePeleFundo};
    border: 1px solid ${cores.corDePeleFundo};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    font-weight: bold;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`
