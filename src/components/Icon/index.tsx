import { h, ComponentChildren } from "preact"
import { styled } from "linaria/react"

type Props = {
  size: number
  href: string
  compoent?: ComponentChildren
}

const IconWrapper = styled.a<{ size: number }>`
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  padding: ${({ size }) => size / 8}rem;
  border-radius: 50%;
  fill: var(--white);
`

const Icon = (props: Props) => {
  return (
    <IconWrapper size={props.size} href={props.href}>
      {props.compoent}
    </IconWrapper>
  )
}

export default Icon
