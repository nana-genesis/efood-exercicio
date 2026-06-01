import Tag from '../Tag'
import Button from '../Button'

import { Card, Descricao, Titulo, Infos, HeaderCard, Avaliacao, CardContent } from './styles'

type Props = {
  id: number
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  avaliacao?: number
}

const Product = ({
  id,
  title,
  category,
  system,
  description,
  infos,
  image,
  avaliacao
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardContent>
      <HeaderCard>
        <Titulo>{title}</Titulo>
        {avaliacao !== undefined && (
          <Avaliacao>
            <span>{avaliacao}</span>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
              <path d="M10.5 0L12.8574 7.25532H20.4861L14.3144 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68557 11.7394L0.513875 7.25532H8.14256L10.5 0Z" fill="#E66767"/>
            </svg>
          </Avaliacao>
        )}
      </HeaderCard>
      <Descricao>{description}</Descricao>
      <div>
        <Button type="link" to={`/restaurant/${id}`} title="Clique aqui para saber mais">
          {system}
        </Button>
      </div>
    </CardContent>
  </Card>
)

export default Product
