import ProductsList from '../../components/ProductsList'
import Food from '../../Models/Food'

import macarrao from '../../assets/images/macarrao.png'
import pizza from '../../assets/images/pizza.png'
import suschi from '../../assets/images/suchi.png'

const promocoes: Food[] = [
  {
    id: 1,
    category: 'promocoes',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    system: 'Saiba Mais!',
    infos: ['15%', 'R$ 65,00'],
    image: suschi
  },

  {
    id: 2,
    category: 'promocoes',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'La Dolce Vita Trattoria',
    system: 'Saiba Mais!',
    infos: ['15%', 'R$ 65,00'],
    image: macarrao
  },

  {
    id: 3,
    category: 'promocoes',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    system: 'Saiba Mais!',
    infos: ['15%', 'R$ 65,00'],
    image: suschi
  },

  {
    id: 4,
    category: 'promocoes',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Pizza Marguerita',
    system: 'Saiba Mais!',
    infos: ['15%', 'R$ 65,00'],
    image: pizza
  }
]

const emBreve: Food[] = [
  {
    id: 5,
    category: 'em breve',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Macarrão La Dolce',
    system: 'Saiba mais!',
    infos: ['19/08'],
    image: macarrao
  },

  {
    id: 6,
    category: 'em breve',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza',
    system: 'Saiba mais!',
    infos: ['19/08'],
    image: pizza
  },

  {
    id: 7,
    category: 'em breve',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Macarrão La Dolce',
    system: 'Saiba mais!',
    infos: ['19/08'],
    image: macarrao
  },

  {
    id: 8,
    category: 'em breve',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza',
    system: 'Saiba mais!',
    infos: ['19/08'],
    image: pizza
  }
]

const Categories = () => (
  <>
    <ProductsList
      food={promocoes}
      title="Pratos Especais"
      background="salmon"
    />

    <ProductsList food={emBreve} title="Especial do dia" background="black" />

    <ProductsList
      food={promocoes}
      title="Promoções especiais"
      background="salmon"
    />

    <ProductsList food={emBreve} title="Prato Recomendado" background="black" />
  </>
)

export default Categories