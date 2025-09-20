import { useEffect, useState } from 'react'
import { Cart } from '../Cart'
import { SideBarBackground } from './styles'
import { Address } from '../Address'
import { Payment } from '../Payment'
import { Order } from '../Order'

type Props = {
  open: boolean
  closeSideBar: () => void
}

type Step = 'cart' | 'address' | 'payment' | 'order'

export const SideBar = ({ closeSideBar, open }: Props) => {
  const [step, setStep] = useState<Step>('cart')

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  if (!open) return null

  return (
    <SideBarBackground>
      {step === 'cart' && (
        <Cart
          openAddress={() => setStep('address')}
          closeSideBar={closeSideBar}
        />
      )}
      {step === 'address' && (
        <Address
          openPayment={() => setStep('payment')}
          closeAddress={() => setStep('cart')}
        />
      )}
      {step === 'payment' && (
        <Payment
          openOrder={() => setStep('order')}
          closePayment={() => setStep('address')}
        />
      )}
      {step === 'order' && <Order closeOrder={() => setStep('cart')} />}
    </SideBarBackground>
  )
}
