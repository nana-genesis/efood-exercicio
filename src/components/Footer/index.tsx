import React from 'react'
import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        {/* Usei as="ul" para garantir que o navegador entenda que é uma lista */}
        <Links as="ul">
          <li>
            <Link>Pratos especiais</Link>
          </li>
          <li>
            <Link>Especial do dia</Link>
          </li>
          <li>
            <Link>Promoções especiais</Link>
          </li>
        </Links>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links as="ul">
          <li>
            <Link>Prato recomendado</Link>
          </li>
          <li>
            <Link>Promoção do dia</Link>
          </li>
          <li>
            <Link>Especial do dia</Link>
          </li>
        </Links>
      </FooterSection>

      <p>{currentYear} - &copy; E-FOOD Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
