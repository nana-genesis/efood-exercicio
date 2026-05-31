import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import Logo from '../../assets/images/logo.png'
import Carrinho from '../../assets/images/carrinho.png'

const Header = () => (
  <HeaderBar>
    <nav>
      <Links>
        <LinkItem>
          <Link to="/Categories">Categorias</Link>
        </LinkItem>
      </Links>
    </nav>
    <Link to="/">
      <img src={Logo} alt="logo" />
    </Link>

    <LinkCart href="#">
      0 - Produto(s)
      <img src={Carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header