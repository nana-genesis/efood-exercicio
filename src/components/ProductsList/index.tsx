import Food from '../../Models/Food'
import Product from '../Product'
import { Container, List } from './styles'

//aq vou fazer um elemento de propriedades Props. e esportando elas é posivel manipular no styles por exemplo
export type Props = {
  title: string
  background: 'salmon' | 'black'
  food: Food[]
}

const ProductsList = ({ background, title, food }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {food.map((food) => (
          <Product
            key={food.id}
            category={food.category}
            description={food.description}
            image={food.image}
            infos={food.infos}
            system={food.system}
            title={food.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList