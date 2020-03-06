import { styled } from "linaria/react"

type Property = "size"

type Props = {
  [P in Property]: string
}

export default styled.div<Partial<Props>>`
  font-size: ${({ size }) => size || "1rem"};
  color: var(--white);
`
