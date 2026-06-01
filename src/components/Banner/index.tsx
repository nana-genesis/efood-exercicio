import { Imagem, BannerContainer, Titulo, BannerTag } from './styles'

type Props = {
  image?: string
  type?: string
  title?: string
}

export default function Banner({ image, type, title }: Props) {
  return (
    <Imagem style={{ backgroundImage: `url(${image})` }}>
      <BannerContainer className="container">
        <BannerTag>{type}</BannerTag>
        <Titulo>{title}</Titulo>
      </BannerContainer>
    </Imagem>
  )
}
