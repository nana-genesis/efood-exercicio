import { Product as ProductType } from '../../services/api'
import Dish from '../Dish'
import { Container, List } from './styles'

type Props = {
  items: ProductType[]
}

const MenuList = ({ items }: Props) => (
  <Container>
    <div className="container">
      <List>
        {items.map((item) => (
          <Dish key={item.id} dish={item} />
        ))}
      </List>
    </div>
  </Container>
)

export default MenuList
