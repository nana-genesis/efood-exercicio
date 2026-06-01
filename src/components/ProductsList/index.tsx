import { Restaurant } from '../../services/api'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title?: string
  background: 'salmon' | 'black'
  restaurants: Restaurant[]
}

const ProductsList = ({ background, title, restaurants }: Props) => (
  <Container background={background}>
    <div className="container">
      {title && <h2>{title}</h2>}
      <List>
        {restaurants.map((rest) => (
          <Product
            key={rest.id}
            id={rest.id}
            category={rest.tipo}
            description={rest.descricao}
            image={rest.capa}
            infos={rest.destacado ? ['Destaque da semana', rest.tipo] : [rest.tipo]}
            system="Saiba mais"
            title={rest.titulo}
            avaliacao={rest.avaliacao}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
