import { Imagem, BannerContainer, Titulo, BannerTag } from './styles'

type Props = {
  image?: string
  type?: string
  title?: string
  showHome?: boolean
}

export default function Banner({ image, type, title, showHome }: Props) {
  if (showHome) {
    return (
      <Imagem style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
          <p>Viva experiências gastronômicas no conforto da sua casa</p>
        </div>
      </Imagem>
    )
  }

  return (
    <Imagem style={{ backgroundImage: `url(${image})` }}>
      <BannerContainer className="container">
        <BannerTag>{type}</BannerTag>
        <Titulo>{title}</Titulo>
      </BannerContainer>
    </Imagem>
  )
}
