import { useSelector } from 'react-redux'
import {
  Button,
  ButtonRow,
  Cvv,
  Input,
  PaymentContainer,
  PaymentRow,
  Title
} from './styles'
import { RootState } from '../../store'
import { useMask } from '@react-input/mask'
import { useState } from 'react'

type Props = {
  closePayment: () => void
  openOrder: () => void
}

export const Payment = ({ closePayment, openOrder }: Props) => {
  const items = useSelector((state: RootState) => state.cart.items)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)

  const cardNumberRef = useMask({
    mask: '____ ____ ____ ____',
    replacement: { _: /\d/ }
  })

  const cvvRef = useMask({
    mask: '___',
    replacement: { _: /\d/ }
  })

  const monthRef = useMask({
    mask: '__',
    replacement: { _: /\d/ }
  })

  const yearRef = useMask({
    mask: '____',
    replacement: { _: /\d/ }
  })

  const dateValidate = () => {
    const currentYear = new Date().getFullYear()

    if (month < 1 || month > 12) {
      return alert('Insira um mês válido (1-12)')
    } else if (year < currentYear || year > currentYear + 50) {
      return alert('Cartão inválido')
    } else {
      openOrder()
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dateValidate()
  }

  return (
    <PaymentContainer as="form" onSubmit={handleSubmit}>
      <Title>
        Pagamento - Valor a pagar R${' '}
        {items.reduce((acc, i) => acc + i.price, 0).toFixed(2)}
      </Title>
      <label htmlFor="name">Nome no cartão</label>
      <Input
        name="name"
        type="text"
        pattern="[A-Za-zÀ-ÿ\s]+"
        title="Digite apenas letras e espaços"
        required
      />
      <PaymentRow>
        <div>
          <label htmlFor="card">Número do cartão</label>
          <Input ref={cardNumberRef} name="card" required />
        </div>
        <Cvv>
          <label htmlFor="cvv">CVV</label>
          <Input ref={cvvRef} name="cvv" required />
        </Cvv>
      </PaymentRow>
      <PaymentRow>
        <div>
          <label htmlFor="pay-month">Mês de vencimento</label>
          <Input
            ref={monthRef}
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            name="pay-month"
            required
          />
        </div>
        <div>
          <label htmlFor="pay-year">Ano de vencimento</label>
          <Input
            ref={yearRef}
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            name="pay-year"
            required
          />
        </div>
      </PaymentRow>
      <ButtonRow>
        <Button type="submit">Finalizar pagamento</Button>
        <Button onClick={closePayment} type="button">
          Voltar para a edição de endereço
        </Button>
      </ButtonRow>
    </PaymentContainer>
  )
}
