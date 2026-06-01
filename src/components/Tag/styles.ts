import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.' //o . já se referencia ao arquivo index da pasta

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corSalmao};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block; //faz ocupar a largura necessária
`
