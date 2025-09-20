import React from 'react'
import { useMask } from '@react-input/mask'
import {
  AddressContainer,
  AddressRow,
  Button,
  ButtonRow,
  Input,
  Label,
  Title
} from './styles'

type Props = {
  closeAddress: () => void
  openPayment: () => void
}

export const Address = ({ closeAddress, openPayment }: Props) => {
  const foneRef = useMask({
    mask: '+55 (__) _____-____',
    replacement: { _: /\d/ }
  })

  const cepRef = useMask({
    mask: '_____-___',
    replacement: { _: /\d/ }
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    openPayment()
  }

  return (
    <AddressContainer as="form" onSubmit={handleSubmit}>
      <Title>Entrega</Title>
      <label className={Label} htmlFor="name">
        Quem irá receber
      </label>
      <Input
        id="name"
        type="text"
        pattern="[A-Za-zÀ-ÿ\s]+"
        title="Digite apenas letras e espaços"
        required
      />
      <label className={Label} htmlFor="address">
        Endereço
      </label>
      <Input id="address" type="text" required />
      <label className={Label} htmlFor="city">
        Cidade
      </label>
      <Input
        id="city"
        type="text"
        pattern="[A-Za-zÀ-ÿ\s]+"
        title="Digite apenas letras e espaços"
        required
      />
      <AddressRow>
        <div>
          <label className={Label} htmlFor="cep">
            CEP
          </label>
          <Input ref={cepRef} id="cep" required />
        </div>
        <div>
          <label className={Label} htmlFor="tel">
            Número
          </label>
          <Input ref={foneRef} id="tel" required />
        </div>
      </AddressRow>
      <label className={Label} htmlFor="optional">
        Complemento (opcional)
      </label>
      <Input id="optional" type="text" />
      <ButtonRow>
        <Button type="submit">Continuar com o pagamento</Button>
        <Button onClick={closeAddress} type="button">
          Voltar para o carrinho
        </Button>
      </ButtonRow>
    </AddressContainer>
  )
}
