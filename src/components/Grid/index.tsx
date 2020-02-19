import { styled } from "linaria/react"

type Property = "justify" | "alignItems" | "direction"

type Props = {
  [P in Property]: string
}

export default styled.div<Partial<Props>>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justify }) => justify || "stretch"};
  flex-direction: ${({ direction }) => direction || "row"};
`
