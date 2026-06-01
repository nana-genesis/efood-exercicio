import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import Checkout from '../Checkout'
import { Overlay, CartContainer, Sidebar, CartItem, Prices, EmptyCart } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const [isCheckout, setIsCheckout] = useState(false)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    setIsCheckout(false)
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  if (!isOpen) return null

  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      {isCheckout ? (
        <Checkout onBack={() => setIsCheckout(false)} />
      ) : (
        <Sidebar>
          {items.length > 0 ? (
            <>
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.2H2.55556M2.55556 4.2H15M2.55556 4.2V15.4C2.55556 15.8243 2.71944 16.2313 3.01117 16.5314C3.30289 16.8314 3.69855 17 4.11111 17H11.8889C12.3014 17 12.6971 16.8314 12.9888 16.5314C13.2806 16.2313 13.4444 15.8243 13.4444 15.4V4.2M4.88889 4.2V2.6C4.88889 2.17565 5.05278 1.76869 5.3445 1.46863C5.63622 1.16857 6.03189 1 6.44444 1H9.55556C9.96811 1 10.3638 1.16857 10.6555 1.46863C10.9472 1.76869 11.1111 2.17565 11.1111 2.6V4.2" stroke="#E66767" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </CartItem>
                ))}
              </ul>
              <Prices>
                Valor total <span>{getTotalPrice().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </Prices>
              <Button
                type="button"
                title="Clique aqui para continuar com a entrega"
                onClick={() => setIsCheckout(true)}
              >
                Continuar com a entrega
              </Button>
            </>
          ) : (
            <EmptyCart>O carrinho está vazio. Adicione pelo menos um item para continuar.</EmptyCart>
          )}
        </Sidebar>
      )}
    </CartContainer>
  )
}

export default Cart
