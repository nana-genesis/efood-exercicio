import { Imagem, ImagemEfood } from './styles'

import bannerImg from '../../assets/images/VectorFundoCabecalho.png'
import bannerImgEfood from '../../assets/images/logo.png'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div>
      <ImagemEfood
        style={{ backgroundImage: `url(${bannerImgEfood})` }}
      ></ImagemEfood>
    </div>
    <div>
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </div>
    <div className="container">
      <Button type="link" to="/produto" title="Clique auq para pedir Agora">
        Peça Já o Seu!
      </Button>
    </div>
  </Imagem>
) //é para colocar a fóto do banner no site

export default Banner