import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'submit' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

export default function Button(props: Props) {
  const { type, title, to, onClick, children } = props

  if (type === 'link') {
    return (
      <ButtonLink to={to as string} title={title}>
        {children}
      </ButtonLink>
    )
  }

  return (
    <ButtonContainer type={type} title={title} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}
