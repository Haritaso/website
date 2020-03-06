import { styled } from "linaria/react"

type Props = {
  fontSize?: string
  color?: string
}

export default styled.div<Props>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: var(${({ color }) => color || "--white"});
`
