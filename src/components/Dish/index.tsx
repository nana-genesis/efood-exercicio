import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Product as ProductType } from '../../services/api'
import { add, open } from '../../store/reducers/cart'
import Button from '../Button'
import { Card, Modal, ModalContent, Overlay } from './styles'

type Props = {
  dish: ProductType
}

export default function Dish({ dish }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const dispatch = useDispatch()

  function addToCart() {
    dispatch(add(dish))
    dispatch(open())
    setModalIsOpen(false)
  }

  function getDescricao(descricao: string) {
    if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <img src={dish.foto} alt={dish.nome} />
        <h3>{dish.nome}</h3>
        <p>{getDescricao(dish.descricao)}</p>
        <Button
          type="button"
          title="Clique aqui para ver detalhes"
          onClick={function () {
            setModalIsOpen(true)
          }}
        >
          Mais detalhes
        </Button>
      </Card>

      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={function () {
                setModalIsOpen(false)
              }}
              style={{ cursor: 'pointer' }}
            >
              <path
                d="M1 1L15 15M15 1L1 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </header>
          <main>
            <img src={dish.foto} alt={dish.nome} />
            <div>
              <h3>{dish.nome}</h3>
              <p>
                {dish.descricao}
                <br />
                <br />
                Serve: {dish.porcao}
              </p>
              <Button
                type="button"
                title="Adicionar ao carrinho"
                onClick={addToCart}
              >
                {`Adicionar ao carrinho - ${dish.preco.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}`}
              </Button>
            </div>
          </main>
        </ModalContent>
        <Overlay
          onClick={function () {
            setModalIsOpen(false)
          }}
        />
      </Modal>
    </>
  )
}
