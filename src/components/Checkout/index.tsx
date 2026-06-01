import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { clear, close } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import Button from '../Button'
import { Row, InputGroup, Sidebar, Title } from './styles'

type Props = {
  onBack: () => void
}

export default function Checkout({ onBack }: Props) {
  const [step, setStep] = useState<'delivery' | 'payment' | 'success'>(
    'delivery'
  )
  const { items } = useSelector(function (state: RootState) {
    return state.cart
  })
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const totalPrice = items.reduce(function (acc, item) {
    return acc + item.preco
  }, 0)

  const [deliveryData, setDeliveryData] = useState({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  })

  const [paymentData, setPaymentData] = useState({
    nameCard: '',
    cardNumber: '',
    cardCode: '',
    expiresMonth: '',
    expiresYear: ''
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (step === 'delivery') {
      setStep('payment')
    } else {
      const payload = {
        products: items.map(function (item) {
          return { id: item.id, price: item.preco }
        }),
        delivery: {
          receiver: deliveryData.receiver,
          address: {
            description: deliveryData.address,
            city: deliveryData.city,
            zipCode: deliveryData.zipCode,
            number: Number(deliveryData.number),
            complement: deliveryData.complement
          }
        },
        payment: {
          card: {
            name: paymentData.nameCard,
            number: paymentData.cardNumber,
            code: Number(paymentData.cardCode),
            expires: {
              month: Number(paymentData.expiresMonth),
              year: Number(paymentData.expiresYear)
            }
          }
        }
      }
      purchase(payload)
      setStep('success')
      dispatch(clear())
    }
  }

  if (step === 'success' && isSuccess && data) {
    return (
      <Sidebar>
        <Title>Pedido realizado - {data.orderId}</Title>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <br />
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <br />
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar.
        </p>
        <br />
        <p>
          Esperamos que desfrute de uma experiência gastronômica prazerosa e
          satisfatória com nosso serviço.
        </p>
        <br />
        <Button
          type="button"
          title="Concluir"
          onClick={function () {
            dispatch(close())
          }}
        >
          Concluir
        </Button>
      </Sidebar>
    )
  }

  return (
    <Sidebar>
      <form onSubmit={handleSubmit}>
        {step === 'delivery' ? (
          <>
            <Title>Entrega</Title>
            <InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                required
                id="receiver"
                type="text"
                value={deliveryData.receiver}
                onChange={function (e) {
                  setDeliveryData({ ...deliveryData, receiver: e.target.value })
                }}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                required
                id="address"
                type="text"
                value={deliveryData.address}
                onChange={function (e) {
                  setDeliveryData({ ...deliveryData, address: e.target.value })
                }}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                required
                id="city"
                type="text"
                value={deliveryData.city}
                onChange={function (e) {
                  setDeliveryData({ ...deliveryData, city: e.target.value })
                }}
              />
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <input
                  required
                  id="zipCode"
                  type="text"
                  value={deliveryData.zipCode}
                  onChange={function (e) {
                    setDeliveryData({
                      ...deliveryData,
                      zipCode: e.target.value
                    })
                  }}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  required
                  id="number"
                  type="text"
                  value={deliveryData.number}
                  onChange={function (e) {
                    setDeliveryData({ ...deliveryData, number: e.target.value })
                  }}
                />
              </InputGroup>
            </Row>
            <InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                type="text"
                value={deliveryData.complement}
                onChange={function (e) {
                  setDeliveryData({
                    ...deliveryData,
                    complement: e.target.value
                  })
                }}
              />
            </InputGroup>
            <Button
              type="submit"
              title="Continuar com pagamento"
            >
              Continuar com pagamento
            </Button>
            <Button
              type="button"
              title="Voltar para o carrinho"
              onClick={onBack}
            >
              Voltar para o carrinho
            </Button>
          </>
        ) : (
          <>
            <Title>
              Pagamento - Valor a pagar{' '}
              {totalPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </Title>
            <InputGroup>
              <label htmlFor="nameCard">Nome no cartão</label>
              <input
                required
                id="nameCard"
                type="text"
                value={paymentData.nameCard}
                onChange={function (e) {
                  setPaymentData({ ...paymentData, nameCard: e.target.value })
                }}
              />
            </InputGroup>
            <Row>
              <InputGroup style={{ flex: 3 }}>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  required
                  id="cardNumber"
                  type="text"
                  value={paymentData.cardNumber}
                  onChange={function (e) {
                    setPaymentData({
                      ...paymentData,
                      cardNumber: e.target.value
                    })
                  }}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <input
                  required
                  id="cardCode"
                  type="text"
                  value={paymentData.cardCode}
                  onChange={function (e) {
                    setPaymentData({ ...paymentData, cardCode: e.target.value })
                  }}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  required
                  id="expiresMonth"
                  type="text"
                  value={paymentData.expiresMonth}
                  onChange={function (e) {
                    setPaymentData({
                      ...paymentData,
                      expiresMonth: e.target.value
                    })
                  }}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  required
                  id="expiresYear"
                  type="text"
                  value={paymentData.expiresYear}
                  onChange={function (e) {
                    setPaymentData({
                      ...paymentData,
                      expiresYear: e.target.value
                    })
                  }}
                />
              </InputGroup>
            </Row>
            <Button type="submit" title="Finalizar pagamento">
              Finalizar pagamento
            </Button>
            <Button
              type="button"
              title="Voltar para a edição de endereço"
              onClick={function () {
                setStep('delivery')
              }}
            >
              Voltar para a edição de endereço
            </Button>
          </>
        )}
      </form>
    </Sidebar>
  )
}
