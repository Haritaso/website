import { h, ComponentChildren } from "preact"
import { styled } from "linaria/react"

type Props = {
  size: number
  href: string
  alt: string
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
    <IconWrapper
      size={props.size}
      href={props.href}
      alt={props.alt}
      aria-label={props.alt}
    >
      {props.compoent}
    </IconWrapper>
  )
}

export default Icon
