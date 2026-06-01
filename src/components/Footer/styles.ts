import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.corDePeleFundo};
  padding: 40px 0;
  text-align: center;
`

export const FooterSection = styled.div`
  margin-bottom: 32px;

  img {
    width: 125px;
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const SectionTitle = styled.p`
  color: ${cores.corSalmao};
  font-size: 10px;
  max-width: 480px;
  margin: 0 auto;
  line-height: 12px;
`
