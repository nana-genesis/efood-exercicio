import { Restaurant } from '../../services/api'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title?: string
  background: 'salmon' | 'black'
  restaurants: Restaurant[]
}

export default function ProductsList(props: Props) {
  const { background, title, restaurants } = props
  return (
    <Container background={background}>
      <div className="container">
        {title && <h2>{title}</h2>}
        <List>
          {restaurants.map(function (rest) {
            return (
              <Product
                key={rest.id}
                id={rest.id}
                category={rest.tipo}
                description={rest.descricao}
                image={rest.capa}
                infos={
                  rest.destacado
                    ? ['Destaque da semana', rest.tipo]
                    : [rest.tipo]
                }
                system="Saiba mais"
                title={rest.titulo}
                avaliacao={rest.avaliacao}
              />
            )
          })}
        </List>
      </div>
    </Container>
  )
}
