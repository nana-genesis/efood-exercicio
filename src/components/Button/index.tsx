import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string //aqui é o texto q vai aparecer quando colocar o mouse sobre o botão
  to?: string //aq vai ser o caminha, vai levar para algum lugar quando clicar no botão
  onClick?: () => void //quando houver ações de clicks essa propriedade será ativca
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  //o type script estava reclamando do to então tive q acrescentar o (as string)
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
