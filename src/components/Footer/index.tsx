import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currrentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>Pratos especiais</Link>
          </li>

          <li>
            <Link>Especial do dia</Link>
          </li>

          <li>
            <Link>Promoçôes especiais</Link>
          </li>
        </Links>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
          <li>
            <Link>Prato recomendado</Link>
          </li>

          <li>
            <Link>Promoçõe do dia</Link>
          </li>

          <li>
            <Link>Especial do dia</Link>
          </li>
        </Links>
      </FooterSection>

      <p>{currrentYear} - &copy; E-FOOD Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer