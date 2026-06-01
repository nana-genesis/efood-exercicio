import { Product as ProductType } from '../../services/api'
import Dish from '../Dish'
import { Container, List } from './styles'

type Props = {
  items: ProductType[]
}

export default function MenuList({ items }: Props) {
  return (
    <Container>
      <div className="container">
        <List>
          {items.map(function (item) {
            return <Dish key={item.id} dish={item} />
          })}
        </List>
      </div>
    </Container>
  )
}
