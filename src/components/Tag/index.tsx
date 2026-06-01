import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

export default function Tag(props: Props) {
  const { children, size = 'small' } = props
  return <TagContainer size={size}>{children}</TagContainer>
}
