import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { clear, close } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import Button from '../Button'
import { Row, InputGroup, Sidebar, Title } from './styles'

type Props = {
  onBack: () => void
}

type OrderResponse = {
  orderId: string
  delivery?: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment?: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export default function Checkout({ onBack }: Props) {
  const [step, setStep] = useState<'delivery' | 'payment' | 'success'>(
    'delivery'
  )
  const formRef = useRef<HTMLFormElement>(null)
  const { items } = useSelector(function (state: RootState) {
    return state.cart
  })
  const [purchase, { isLoading }] = usePurchaseMutation()
  const [orderData, setOrderData] = useState<OrderResponse | null>(null)
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

  // Helpers para validação
  function handleOnlyNumbers(value: string): string {
    return value.replace(/[^0-9]/g, '')
  }

  function formatCEP(value: string): string {
    const cleaned = handleOnlyNumbers(value)
    return cleaned.slice(0, 8)
  }

  function formatCardNumber(value: string): string {
    const cleaned = handleOnlyNumbers(value)
    return cleaned.slice(0, 16)
  }

  function formatCVV(value: string): string {
    return handleOnlyNumbers(value).slice(0, 3)
  }

  function formatMonth(value: string): string {
    const cleaned = handleOnlyNumbers(value)
    if (cleaned.length === 0) return ''
    const monthNum = parseInt(cleaned)
    if (monthNum > 12) return '12'
    return cleaned.slice(0, 2)
  }

  function formatYear(value: string): string {
    return handleOnlyNumbers(value).slice(0, 4)
  }

  function formatNumber(value: string): string {
    return handleOnlyNumbers(value)
  }

  function submitCheckoutForm() {
    formRef.current?.requestSubmit()
  }

  async function handleSubmit(e: React.FormEvent) {
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
      try {
        const response = await purchase(payload).unwrap()
        setOrderData(response)
        setStep('success')
        dispatch(clear())
      } catch {
        alert('Não foi possível finalizar o pedido. Tente novamente.')
      }
    }
  }

  if (step === 'success' && orderData) {
    return (
      <Sidebar>
        <Title>Pedido realizado - {orderData.orderId}</Title>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <br />

        {orderData.delivery && (
          <>
            <strong>Dados da Entrega:</strong>
            <p>
              <strong>Nome:</strong> {orderData.delivery.receiver}
            </p>
            <p>
              <strong>Endereço:</strong> {orderData.delivery.address.description},
              {' '}
              {orderData.delivery.address.number}
              {orderData.delivery.address.complement && `, ${orderData.delivery.address.complement}`}
            </p>
            <p>
              <strong>Cidade:</strong> {orderData.delivery.address.city}
            </p>
            <p>
              <strong>CEP:</strong> {orderData.delivery.address.zipCode}
            </p>
            <br />
          </>
        )}

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
            onBack()
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
      <form ref={formRef} onSubmit={handleSubmit}>
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
                  inputMode="numeric"
                  maxLength={8}
                  value={deliveryData.zipCode}
                  onChange={function (e) {
                    setDeliveryData({
                      ...deliveryData,
                      zipCode: formatCEP(e.target.value)
                    })
                  }}
                  placeholder="00000000"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  required
                  id="number"
                  type="text"
                  inputMode="numeric"
                  value={deliveryData.number}
                  onChange={function (e) {
                    setDeliveryData({ 
                      ...deliveryData, 
                      number: formatNumber(e.target.value)
                    })
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
              type="button"
              title="Continuar com pagamento"
              onClick={submitCheckoutForm}
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
                  inputMode="numeric"
                  maxLength={16}
                  value={paymentData.cardNumber}
                  onChange={function (e) {
                    setPaymentData({
                      ...paymentData,
                      cardNumber: formatCardNumber(e.target.value)
                    })
                  }}
                  placeholder="0000000000000000"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <input
                  required
                  id="cardCode"
                  type="text"
                  inputMode="numeric"
                  maxLength={3}
                  value={paymentData.cardCode}
                  onChange={function (e) {
                    setPaymentData({ 
                      ...paymentData, 
                      cardCode: formatCVV(e.target.value)
                    })
                  }}
                  placeholder="000"
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
                  inputMode="numeric"
                  maxLength={2}
                  value={paymentData.expiresMonth}
                  onChange={function (e) {
                    setPaymentData({
                      ...paymentData,
                      expiresMonth: formatMonth(e.target.value)
                    })
                  }}
                  placeholder="MM"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  required
                  id="expiresYear"
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  value={paymentData.expiresYear}
                  onChange={function (e) {
                    setPaymentData({
                      ...paymentData,
                      expiresYear: formatYear(e.target.value)
                    })
                  }}
                  placeholder="AAAA"
                />
              </InputGroup>
            </Row>
            <Button
              type="button"
              title="Finalizar pagamento"
              onClick={submitCheckoutForm}
            >
              {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
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
